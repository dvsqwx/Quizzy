export function createEngine(questions, { timeLimitSec = 20 } = {}) {
  let index = 0;
  const chosen = new Map();
  const ids = new Set();
  const statsByCat = new Map();
  for (const q of questions) {
    ids.add(q.id);
    if (!statsByCat.has(q.category)) statsByCat.set(q.category, { correct: 0, total: 0 });
  }
  function current() { return questions[index]; }
  function progress() { return { index, total: questions.length }; }
  function select(answer) { chosen.set(current().id, answer); }
  function getChosen(qid) { return chosen.get(qid); }
  function next() { if (index < questions.length - 1) index++; }
  function prev() { if (index > 0) index--; }
  function skip() {
    if (!chosen.has(current().id)) chosen.set(current().id, null);
    next();
  }
  function canFinish() { return chosen.size > 0; }
  function evaluate() {
    let correctCount = 0;
    for (const q of questions) {
      const c = chosen.get(q.id);
      const cat = statsByCat.get(q.category);
      cat.total++;
      if (c && c === q.correct) {
        correctCount++;
        cat.correct++;
      }
    }
    return {
      total: questions.length,
      correct: correctCount,
      wrong: questions.length - correctCount,
      percent: Math.round((correctCount / questions.length) * 100),
      statsByCategory: Array.from(statsByCat.entries()).map(([k, v]) => ({ category: k, ...v }))
    };
  }
  return {
    timeLimitSec,
    current,
    progress,
    select,
    getChosen,
    next,
    prev,
    skip,
    canFinish,
    evaluate,
    isKnownId: (id) => ids.has(id)
  };
}
