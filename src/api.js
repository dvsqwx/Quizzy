import { localQuestionsByTopic } from "./localQuestions.js";
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function normalizeLocalQuestion(q) {
  const answers = [q.correct, ...(q.incorrect || [])].slice(0, 4);
  return {
    id: q.id,
    category: q.category,
    question: q.question,
    answers,
    correct: q.correct
  };
}
export async function loadQuestions({ topic, amount, shuffleAnswers }) {
  const limit = Number(amount) || 10;
  try {
    const url = `/api/questions?topic=${encodeURIComponent(topic)}&amount=${limit}`;
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data) && data.length) {
      return data.map(q => ({
        ...q,
        answers: shuffleAnswers ? shuffle(q.answers) : q.answers
      }));
    }
  } catch (e) {
  }
  const localRaw = localQuestionsByTopic[topic] || [];
  const local = localRaw.map(normalizeLocalQuestion);
  const picked = local.slice(0, limit).map(q => ({
    ...q,
    answers: shuffleAnswers ? shuffle(q.answers) : q.answers
  }));
  return picked;
}
export async function loadResults() {
  try {
    const res = await fetch("/api/results", { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error("bad results");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}
export async function saveResult(payload) {
  try {
    await fetch("/api/results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
  }
}
