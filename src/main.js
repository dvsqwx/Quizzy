import { loadQuestions, saveResult, loadResults } from "./api.js";
import { createEngine } from "./engine.js";
import { show, renderHistory, renderStats, renderTopbar, renderQuestion } from "./ui.js";
const el = (id) => document.getElementById(id);
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("quizzy_theme", theme);
  const bL = document.getElementById("themeLightBtn");
  const bD = document.getElementById("themeDarkBtn");
  if (bL) bL.classList.toggle("active", theme === "light");
  if (bD) bD.classList.toggle("active", theme === "dark");
}
function initTheme() {
  const saved = localStorage.getItem("quizzy_theme");
  applyTheme(saved === "light" ? "light" : "dark");
}
let engine = null;
let timerId = null;
let timeLeft = 0;
let reveal = null;
let gameMode = "normal";
let streak = 0;
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
    const timerEl = el("timer");
    if (timerEl && timeLeft <= 5) timerEl.classList.add("danger");
    if (timerEl && timeLeft > 5) timerEl.classList.remove("danger");
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
      const correct = ans === q.correct;
      switch (gameMode) {
        case "exam":
          if (!correct && engine.timeLimitSec > 0) {
            timeLeft = Math.max(0, timeLeft - 5);
          }
          break;
        case "streak":
          if (correct) {
            streak += 1;
            if (engine.timeLimitSec > 0 && streak % 3 === 0) {
              timeLeft += 5;
            }
          } else {
            streak = 0;
          }
          break;
        default:
          break;
      }
      reveal = { correct: q.correct, chosen: ans };
      el("hint").textContent = correct
        ? "Правильно!"
        : (gameMode === "exam" && engine.timeLimitSec > 0)
          ? "Помилка! −5 секунд"
          : "Неправильно";
      stopTimer();
      setTimeout(() => {
        reveal = null;
        el("hint").textContent = "";
        engine.next();
        startTimerIfNeeded();
      }, 700);
    }
  });
}
async function refreshHistoryFromServer() {
  const list = await loadResults();
  renderHistory(el("history"), list);
}
function calculateStats(results) {
  const totalGames = results.length;
  if (!totalGames) return null;
  let sum = 0;
  const byTopic = {};
  results.forEach((r) => {
    const percent = Number(r.percent) || 0;
    sum += percent;
    if (!byTopic[r.topic]) {
      byTopic[r.topic] = { games: 0, avgSum: 0, best: percent, worst: percent };
    }
    byTopic[r.topic].games += 1;
    byTopic[r.topic].avgSum += percent;
    byTopic[r.topic].best = Math.max(byTopic[r.topic].best, percent);
    byTopic[r.topic].worst = Math.min(byTopic[r.topic].worst, percent);
  });
  const average = Math.round(sum / totalGames);
  const byTopicRows = Object.entries(byTopic).map(([topic, t]) => ({
    topic,
    games: t.games,
    avg: Math.round(t.avgSum / t.games),
    best: t.best,
    worst: t.worst
  }));
  byTopicRows.sort((a, b) => (b.games - a.games) || (b.avg - a.avg));
  return { totalGames, average, byTopicRows };
}
async function openStats() {
  const results = await loadResults();
  const stats = calculateStats(results);
  if (!stats) {
    el("statsSummary").innerHTML = `<div class="muted">Немає даних для статистики.</div>`;
    el("statsByTopic").innerHTML = "";
    el("statsLast").innerHTML = "";
    show("screenStats");
    return;
  }
  el("statsSummary").innerHTML = `
    <div class="stat"><b>${stats.totalGames}</b><span class="muted">Ігор</span></div>
    <div class="stat"><b>${stats.average}%</b><span class="muted">Середній результат</span></div>
  `;
  el("statsByTopic").innerHTML = stats.byTopicRows.map(t => `
    <div class="histItem">
      <b>${t.topic}</b>
      <span class="muted">${t.avg}% avg • ${t.games} games • best ${t.best}% • worst ${t.worst}%</span>
    </div>
  `).join("");
  const last10 = results.slice(-10).reverse();
  el("statsLast").innerHTML = last10.map(r => `
    <div class="histItem">
      <b>${r.topic}</b>
      <span class="muted">${r.correct}/${r.total} • ${r.percent}%</span>
    </div>
  `).join("");
  show("screenStats");
}
async function startQuiz() {
  const topic = el("topic").value;
  const amount = Number(el("amount").value);
  const timeLimitSec = Number(el("timeLimit").value);
  const shuffleAnswers = el("shuffle").value === "yes";
  gameMode = el("mode")?.value || "normal";
  streak = 0;
  const questions = await loadQuestions({ topic, amount, shuffleAnswers });
  if (!questions.length) {
    alert("Немає питань для цієї теми. Додай питання на сервер або в локальну базу.");
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
  await saveResult({
    topic,
    mode: gameMode,
    total: result.total,
    correct: result.correct,
    percent: result.percent
  });
  el("summary").innerHTML = `
    <div class="stat"><b>${result.correct}/${result.total}</b><span class="muted">Correct</span></div>
    <div class="stat"><b>${result.wrong}</b><span class="muted">Wrong</span></div>
    <div class="stat"><b>${result.percent}%</b><span class="muted">Score</span></div>
    <div class="stat"><b>${gameMode}</b><span class="muted">Mode</span></div>
  `;
  renderStats(el("stats"), result.statsByCategory);
  show("screenResult");
}
async function backToSetup() {
  stopTimer();
  await refreshHistoryFromServer();
  show("screenSetup");
}
function bindHotkeys() {
  document.addEventListener("keydown", (e) => {
    const quizActive = document.getElementById("screenQuiz")?.classList.contains("active");
    if (!quizActive || !engine) return;
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
    switch (e.key) {
      case "ArrowRight":
      case "Enter":
        engine.next();
        startTimerIfNeeded();
        break;
      case "ArrowLeft":
        engine.prev();
        startTimerIfNeeded();
        break;
      case "Escape":
        backToSetup();
        break;
      case "1":
      case "2":
      case "3":
      case "4": {
        const idx = Number(e.key) - 1;
        const q = engine.current();
        const ans = q?.answers?.[idx];
        if (!ans) return;
        const correct = ans === q.correct;
        engine.select(ans);
        switch (gameMode) {
          case "exam":
            if (!correct && engine.timeLimitSec > 0) timeLeft = Math.max(0, timeLeft - 5);
            break;
          case "streak":
            if (correct) {
              streak += 1;
              if (engine.timeLimitSec > 0 && streak % 3 === 0) timeLeft += 5;
            } else streak = 0;
            break;
          default:
            break;
        }
        reveal = { correct: q.correct, chosen: ans };
        el("hint").textContent = correct
          ? "Правильно!"
          : (gameMode === "exam" && engine.timeLimitSec > 0)
            ? "Помилка! −5 секунд"
            : "Неправильно";
        stopTimer();
        setTimeout(() => {
          reveal = null;
          el("hint").textContent = "";
          engine.next();
          startTimerIfNeeded();
        }, 700);
        break;
      }
    }
  });
}
function wire() {
  // Theme
  initTheme();
  document.getElementById("themeLightBtn")?.addEventListener("click", () => applyTheme("light"));
  document.getElementById("themeDarkBtn")?.addEventListener("click", () => applyTheme("dark"));
  el("startBtn")?.addEventListener("click", startQuiz);
  el("openStatsBtn")?.addEventListener("click", openStats);
  el("clearHistoryBtn")?.addEventListener("click", () => {
    renderHistory(el("history"), []);
    alert("Це очищає лише UI. Для повного очищення серверної історії — потрібно endpoint або очистити db.");
  });
  el("prevBtn")?.addEventListener("click", () => {
    if (!engine) return;
    engine.prev();
    startTimerIfNeeded();
  });
  el("nextBtn")?.addEventListener("click", () => {
    if (!engine) return;
    engine.next();
    startTimerIfNeeded();
  });
  el("skipBtn")?.addEventListener("click", () => {
    if (!engine) return;
    engine.skip();
    startTimerIfNeeded();
  });
  el("finishBtn")?.addEventListener("click", async () => {
    if (!engine) return;
    if (engine.canFinish()) await finishQuiz();
  });
  el("quitBtn")?.addEventListener("click", backToSetup);
  el("restartBtn")?.addEventListener("click", startQuiz);
  el("backBtn")?.addEventListener("click", backToSetup);
  el("goStatsBtn")?.addEventListener("click", openStats);
  el("backFromStatsBtn")?.addEventListener("click", backToSetup);
  bindHotkeys();
}
window.addEventListener("DOMContentLoaded", async () => {
  wire();
  await refreshHistoryFromServer();
});
