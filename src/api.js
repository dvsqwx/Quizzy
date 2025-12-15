import { localQuestionsByTopic } from "./localQuestions.js";
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export function loadQuestions({ topic, amount, shuffleAnswers }) {
  const base = localQuestionsByTopic[topic] ?? [];
  const selected = base.slice(0, amount);
  return selected.map((q) => ({
    id: q.id,
    category: q.category,
    question: q.question,
    correct: q.correct,
    answers: shuffleAnswers
      ? shuffle([q.correct, ...q.incorrect])
      : [q.correct, ...q.incorrect]
  }));
}
