const KEY = "quizzy_history_v1";

export function loadHistory() {
  try { return JSON.parse(localStorage.getItem(KEY) ?? "[]"); }
  catch { return []; }
}

export function saveAttempt(attempt) {
  const hist = loadHistory();
  hist.unshift(attempt);
  localStorage.setItem(KEY, JSON.stringify(hist.slice(0, 10)));
  return hist;
}

export function clearHistory() {
  localStorage.removeItem(KEY);
}
