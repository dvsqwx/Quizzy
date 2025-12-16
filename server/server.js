import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, "..");
const DB_PATH = path.join(__dirname, "db.json");

app.use(express.static(ROOT)); // раздаём фронтенд

async function readDB() {
  const raw = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(raw);
}
async function writeDB(db) {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

function validateTopic(topic) {
  return topic === "ai" || topic === "js" || topic === "movies";
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildN(list, amount) {
  if (!list.length) return [];
  const out = [];
  let i = 0;
  while (out.length < amount) {
    out.push(list[i % list.length]);
    i++;
  }
  return out;
}

// GET /api/questions?topic=ai&amount=10
app.get("/api/questions", async (req, res) => {
  try {
    const topic = String(req.query.topic || "");
    const amount = Math.max(1, Math.min(50, Number(req.query.amount || 10)));

    if (!validateTopic(topic)) return res.status(400).json({ error: "Invalid topic" });

    const db = await readDB();
    const list = db.questions?.[topic] ?? [];
    const selected = buildN(list, amount);

    const normalized = selected.map((q) => ({
      id: q.id,
      category: q.category ?? topic.toUpperCase(),
      question: q.question,
      correct: q.correct,
      incorrect: q.incorrect ?? [],
      answers: shuffle([q.correct, ...(q.incorrect ?? [])])
    }));

    res.json({ topic, amount: normalized.length, questions: normalized });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/questions
app.post("/api/questions", async (req, res) => {
  try {
    const { topic, category, question, correct, incorrect } = req.body ?? {};

    if (!validateTopic(topic)) return res.status(400).json({ error: "Invalid topic" });
    if (!question || !correct || !Array.isArray(incorrect) || incorrect.length < 1) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const db = await readDB();
    db.questions = db.questions ?? { ai: [], js: [], movies: [] };
    db.questions[topic] = db.questions[topic] ?? [];

    const q = {
      id: `q-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      topic,
      category: category || topic.toUpperCase(),
      question: String(question),
      correct: String(correct),
      incorrect: incorrect.map(String)
    };

    db.questions[topic].push(q);
    await writeDB(db);

    res.status(201).json({ ok: true, created: q });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/results
app.get("/api/results", async (_req, res) => {
  try {
    const db = await readDB();
    res.json({ results: db.results ?? [] });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/results
app.post("/api/results", async (req, res) => {
  try {
    const { topic, total, correct, percent } = req.body ?? {};
    if (!validateTopic(topic)) return res.status(400).json({ error: "Invalid topic" });
    if (![total, correct, percent].every((x) => typeof x === "number")) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const db = await readDB();
    db.results = db.results ?? [];

    const attempt = {
      id: `r-${Date.now()}`,
      topic,
      total,
      correct,
      percent,
      date: new Date().toISOString()
    };

    db.results.unshift(attempt);
    db.results = db.results.slice(0, 30);
    await writeDB(db);

    res.status(201).json({ ok: true, saved: attempt });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Quizzy running: http://localhost:${PORT}`);
});
