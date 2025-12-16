import { loadQuestions, saveResult, loadResults } from "./api.js";
import { createEngine } from "./engine.js";
import { show, renderHistory, renderStats, renderTopbar, renderQuestion } from "./ui.js";
const el = (id) => document.getElementById(id);
let engine = null;
let timerId = null;
let timeLeft = 0;
let reveal = null;
function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
}
function startTimerIfNeeded() {
  stopTimer();
  reveal = null;
  const limit = engine.timeLimitSec;
  const hasTimer = limit > 0;
  if (!hasTimer) {
    render();
    return;
  }
  timeLeft = limit;
  render();
  timerId = setInterval(() => {
    timeLeft--;
    const { index, total } = engine.progress();
    renderTopbar({ index, total, timeLeft, hasTimer: true });
    if (timeLeft <= 0) {
      engine.skip();
      startTimerIfNeeded();
    }
  }, 1000);
}
function render() {
  const { index, total } = engine.progress();
  const q = engine.current();
  const chosen = engine.getChosen(q.id);
  const hasTimer = engine.timeLimitSec > 0;
  renderTopbar({ index, total, timeLeft, hasTimer });
  renderQuestion({
    q,
    chosen,
    revealState: reveal,
    onChoose: (ans) => {
      engine.select(ans);
      reveal = { correct: q.correct, chosen: ans };
      el("hint").textContent = ans === q.correct ? "Правильно!" : "Неправильно.";
      stopTimer();
      setTimeout(() => {
        reveal = null;
        el("hint").textContent = "";
        engine.next();
        startTimerIfNeeded();
      }, 650);
    }
  });
}
async function refreshHistoryFromServer() {
  const list = await loadResults();
  renderHistory(el("history"), list);
}
async function startQuiz() {
  const topic = el("topic").value;
  const amount = Number(el("amount").value);
  const timeLimitSec = Number(el("timeLimit").value);
  const shuffleAnswers = el("shuffle").value === "yes";
  const questions = await loadQuestions({ topic, amount, shuffleAnswers });
  if (!questions.length) {
    alert("Немає питань для цієї теми. Додай питання на сервер або в localQuestions.js");
    return;
  }
  engine = createEngine(questions, { timeLimitSec });
  show("screenQuiz");
  el("hint").textContent = "";
  startTimerIfNeeded();
}
async function finishQuiz() {
  stopTimer();
  const result = engine.evaluate();
  const topic = el("topic").value;
  await saveResult({ topic, total: result.total, correct: result.correct, percent: result.percent });
  el("summary").innerHTML = `
    <div class="stat"><b>${result.correct}/${result.total}</b><span class="muted">Correct</span></div>
    <div class="stat"><b>${result.wrong}</b><span class="muted">Wrong</span></div>
    <div class="stat"><b>${result.percent}%</b><span class="muted">Score</span></div>
  `;
  renderStats(el("stats"), result.statsByCategory);
  show("screenResult");
}
async function backToSetup() {
  stopTimer();
  await refreshHistoryFromServer();
  show("screenSetup");
}
function wire() {
  el("startBtn").addEventListener("click", startQuiz);
  el("prevBtn").addEventListener("click", () => { engine?.prev(); startTimerIfNeeded(); });
  el("nextBtn").addEventListener("click", () => { engine?.next(); startTimerIfNeeded(); });
  el("skipBtn").addEventListener("click", () => { engine?.skip(); startTimerIfNeeded(); });
  el("finishBtn").addEventListener("click", async () => {
    if (engine && engine.canFinish()) await finishQuiz();
  });
  el("quitBtn").addEventListener("click", backToSetup);
  el("restartBtn").addEventListener("click", startQuiz);
  el("backBtn").addEventListener("click", backToSetup);
  el("clearHistoryBtn").addEventListener("click", () => {
    renderHistory(el("history"), []);
    alert("Щоб повністю очистити серверну історію — очисти server/db.json або додай endpoint /api/results/clear.");
  });
}
window.addEventListener("DOMContentLoaded", async () => {
  wire();
  await refreshHistoryFromServer();
});
