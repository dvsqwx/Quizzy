import { localQuestionsByTopic } from "./localQuestions.js";
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildFromLocal({ topic, amount, shuffleAnswers }) {
  const base = localQuestionsByTopic[topic] ?? [];
  if (!base.length) return [];
  const out = [];
  let i = 0;
  while (out.length < amount) {
    out.push(base[i % base.length]);
    i++;
  }
  return out.map((q, idx) => ({
    id: `${q.id}-${idx}-${Date.now()}`,
    category: q.category,
    question: q.question,
    correct: q.correct,
    answers: shuffleAnswers ? shuffle([q.correct, ...q.incorrect]) : [q.correct, ...q.incorrect]
  }));
}
export async function loadQuestions({ topic, amount, shuffleAnswers }) {
  try {
    const res = await fetch(`/api/questions?topic=${encodeURIComponent(topic)}&amount=${amount}`);
    if (!res.ok) throw new Error("Bad response");
    const data = await res.json();
    const qs = data.questions ?? [];
    if (!qs.length) throw new Error("Empty questions");
    return qs.map((q) => ({
      id: q.id,
      category: q.category,
      question: q.question,
      correct: q.correct,
      answers: shuffleAnswers ? shuffle(q.answers ?? [q.correct, ...(q.incorrect ?? [])]) : (q.answers ?? [q.correct, ...(q.incorrect ?? [])])
    }));
  } catch {
    return buildFromLocal({ topic, amount, shuffleAnswers });
  }
}
export async function saveResult({ topic, total, correct, percent }) {
  try {
    const res = await fetch("/api/results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, total, correct, percent })
    });
    if (!res.ok) throw new Error("Bad response");
    return await res.json();
  } catch {
    return { ok: false };
  }
}
export async function loadResults() {
  try {
    const res = await fetch("/api/results");
    if (!res.ok) throw new Error("Bad response");
    const data = await res.json();
    return data.results ?? [];
  } catch {
    return [];
  }
}
export async function clearResultsOnServer() {
  return { ok: true };
}
