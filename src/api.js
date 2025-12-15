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
  const base = (localQuestionsByTopic[topic] ?? []).slice(0, amount);
  return base.map((q) => {
    const answers = shuffleAnswers
      ? shuffle([q.correct, ...q.incorrect])
      : [q.correct, ...q.incorrect];
    return {
      id: q.id,
      category: q.category,
      question: q.question,
      correct: q.correct,
      answers
    };
  });
}
export function loadQuestions({ topic, amount, shuffleAnswers }) {
  return buildFromLocal({ topic, amount, shuffleAnswers });
}
export async function loadTip() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice", { cache: "no-store" });
    if (!res.ok) throw new Error("Bad status: " + res.status);
    const data = await res.json();
    return data?.slip?.advice ?? "No tip received.";
  } catch {
    return "Немає інтернету або API недоступне (fallback).";
  }
}
