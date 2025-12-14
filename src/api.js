import { localQuestions } from "./localQuestions.js";

function decodeHtml(str) {
  const t = document.createElement("textarea");
  t.innerHTML = str;
  return t.value;
}

function shuffle(arr) { 
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function loadQuestions({ amount, difficulty, mode }) {
  if (mode === "offline") return buildFromLocal(amount);

  const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Network");
    const data = await res.json();
    if (!data.results?.length) throw new Error("Empty");

    return data.results.map((q, idx) => {
      const correct = decodeHtml(q.correct_answer);
      const incorrect = q.incorrect_answers.map(decodeHtml);
      const answers = shuffle([correct, ...incorrect]);

      return {
        id: `api-${idx}-${Date.now()}`,
        category: q.category,
        question: decodeHtml(q.question),
        answers,
        correct
      };
    });
  } catch {
    return buildFromLocal(amount);
  }
}

function buildFromLocal(amount) {
  const base = localQuestions.slice(0, amount);
  return base.map((q) => ({
    id: q.id,
    category: q.category,
    question: q.question,
    correct: q.correct,
    answers: shuffle([q.correct, ...q.incorrect])
  }));
}
