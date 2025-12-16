import { loadQuestions, loadResults, saveResult } from "./api.js";
const $ = (sel) => document.querySelector(sel);
const els = {
  themeLightBtn: $("#themeLightBtn"),
  themeDarkBtn: $("#themeDarkBtn"),
  startBtn: $("#startBtn"),
  openStatsBtn: $("#openStatsBtn"),
  screenSetup: $("#screenSetup"),
  screenQuiz: $("#screenQuiz"),
  screenResult: $("#screenResult"),
  screenStats: $("#screenStats"),
  topic: $("#topic"),
  amount: $("#amount"),
  timeLimit: $("#timeLimit"),
  shuffle: $("#shuffle"),
  mode: $("#mode"),
  clearHistoryBtn: $("#clearHistoryBtn"),
  history: $("#history"),
  progressText: $("#progressText"),
  progressFill: $("#progressFill"),
  timer: $("#timer"),
  quitBtn: $("#quitBtn"),
  category: $("#category"),
  question: $("#question"),
  hint: $("#hint"),
  answers: $("#answers"),
  prevBtn: $("#prevBtn"),
  skipBtn: $("#skipBtn"),
  nextBtn: $("#nextBtn"),
  finishBtn: $("#finishBtn"),
  summary: $("#summary"),
  stats: $("#stats"),
  restartBtn: $("#restartBtn"),
  backBtn: $("#backBtn"),
  goStatsBtn: $("#goStatsBtn"),
  statsSummary: $("#statsSummary"),
  statsByTopic: $("#statsByTopic"),
  statsLast: $("#statsLast"),
  backFromStatsBtn: $("#backFromStatsBtn"),
};
const state = {
  settings: {
    topic: "ai",
    amount: 10,
    timeLimit: 20,
    shuffle: true,
    mode: "normal",
  },
  questions: [],
  index: 0,
  chosen: new Map(),
  streak: 0,
  timerLeft: 0,
  timerId: null,
};
function showScreen(name) {
  [els.screenSetup, els.screenQuiz, els.screenResult, els.screenStats].forEach(s => {
    if (s) s.classList.remove("active");
  });
  const map = {
    setup: els.screenSetup,
    quiz: els.screenQuiz,
    result: els.screenResult,
    stats: els.screenStats,
  };
  map[name]?.classList.add("active");
}
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("quizzy_theme", theme);
  els.themeLightBtn?.classList.toggle("active", theme === "light");
  els.themeDarkBtn?.classList.toggle("active", theme === "dark");
}
function readSettingsFromUI() {
  state.settings.topic = els.topic?.value || "ai";
  state.settings.amount = Number(els.amount?.value || 10);
  state.settings.timeLimit = Number(els.timeLimit?.value || 0);
  state.settings.shuffle = (els.shuffle?.value || "yes") === "yes";
  state.settings.mode = els.mode?.value || "normal";
}
function clearTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}
function startTimer() {
  clearTimer();
  const limit = state.settings.timeLimit;
  if (!limit || limit <= 0) {
    els.timer?.classList.add("hidden");
    return;
  }
  state.timerLeft = limit;
  els.timer?.classList.remove("hidden");
  els.timer.textContent = String(state.timerLeft);
  els.timer.classList.remove("danger");
  state.timerId = setInterval(() => {
    state.timerLeft -= 1;
    els.timer.textContent = String(state.timerLeft);
    if (state.timerLeft <= 5) els.timer.classList.add("danger");
    if (state.timerLeft <= 0) {
      clearTimer();
      applyModePenaltyOnWrong();
      goNext(true);
    }
  }, 1000);
}
function applyModePenaltyOnWrong() {
  if (state.settings.mode === "exam" && state.settings.timeLimit > 0) {
    // -5 sec, but not below 0
    state.timerLeft = Math.max(0, state.timerLeft - 5);
    if (els.timer && !els.timer.classList.contains("hidden")) {
      els.timer.textContent = String(state.timerLeft);
      if (state.timerLeft <= 5) els.timer.classList.add("danger");
    }
  }
}
function applyModeBonusOnCorrect() {
  if (state.settings.mode === "streak" && state.settings.timeLimit > 0) {
    if (state.streak > 0 && state.streak % 3 === 0) {
      state.timerLeft += 5;
      if (els.timer && !els.timer.classList.contains("hidden")) {
        els.timer.textContent = String(state.timerLeft);
      }
    }
  }
}
function updateProgress() {
  const total = state.questions.length || 0;
  const current = Math.min(state.index + 1, total);
  if (els.progressText) els.progressText.textContent = `${current}/${total}`;
  const pct = total ? Math.round((current / total) * 100) : 0;
  if (els.progressFill) els.progressFill.style.width = `${pct}%`;
}
function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function renderQuestion() {
  const q = state.questions[state.index];
  if (!q) return;
  updateProgress();
  if (els.category) els.category.textContent = q.category || "";
  if (els.question) els.question.textContent = q.question || "";
  if (els.hint) els.hint.textContent = "";
  const chosen = state.chosen.get(q.id);
  els.answers.innerHTML = "";
  q.answers.forEach((a, i) => {
    const btn = document.createElement("div");
    btn.className = "answer";
    btn.setAttribute("role", "button");
    btn.setAttribute("tabindex", "0");
    btn.dataset.answer = a;
    btn.innerHTML = `<b>${i + 1}.</b> ${escapeHtml(a)}`;
    if (chosen && chosen === a) btn.classList.add("solidPick");
    btn.addEventListener("click", () => pickAnswer(a));
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter") pickAnswer(a);
    });
    els.answers.appendChild(btn);
  });
  startTimer();
}
function pickAnswer(answer) {
  const q = state.questions[state.index];
  if (!q) return;
  state.chosen.set(q.id, answer);
  [...els.answers.querySelectorAll(".answer")].forEach(el => {
    el.classList.remove("correct", "wrong");
    const a = el.dataset.answer;
    if (a === q.correct) el.classList.add("correct");
    if (a === answer && a !== q.correct) el.classList.add("wrong");
  });
  const isCorrect = answer === q.correct;
  if (!q.__scored) {
    q.__scored = true;
    if (isCorrect) {
      state.correctCount += 1;
      state.streak += 1;
      applyModeBonusOnCorrect();
    } else {
      state.streak = 0;
      applyModePenaltyOnWrong();
    }
  }
  if (els.hint) {
    els.hint.textContent = isCorrect ? "Правильно." : `Неправильно. Правильна відповідь: ${q.correct}`;
  }
}
function goPrev() {
  if (state.index <= 0) return;
  state.index -= 1;
  renderQuestion();
}
function goNext(force = false) {
  const q = state.questions[state.index];
  if (!q) return;
  if (!force) {
    if (!state.chosen.get(q.id)) {
    }
  }
  if (state.index >= state.questions.length - 1) {
    finishQuiz();
    return;
  }
  state.index += 1;
  renderQuestion();
}
function skipQuestion() {
  goNext(true);
}
async function startQuiz() {
  readSettingsFromUI();
  const qs = await loadQuestions({
    topic: state.settings.topic,
    amount: state.settings.amount,
    shuffleAnswers: state.settings.shuffle
  });
  if (!qs || !qs.length) {
    alert("Немає питань для цієї теми. Перевір localQuestions.js або сервер /api/questions");
    return;
  }
  state.questions = qs.map(q => ({ ...q, __scored: false }));
  state.index = 0;
  state.chosen = new Map();
  state.correctCount = 0;
  state.streak = 0;
  showScreen("quiz");
  renderQuestion();
}
async function finishQuiz() {
  clearTimer();
  const total = state.questions.length || 0;
  const correct = state.correctCount;
  const payload = {
    ts: Date.now(),
    topic: state.settings.topic,
    mode: state.settings.mode,
    total,
    correct
  };
  await saveResult(payload);
  renderResult(payload);
  showScreen("result");
  await refreshHistory();
}
function renderResult(payload) {
  const pct = payload.total ? Math.round((payload.correct / payload.total) * 100) : 0;
  els.summary.innerHTML = `
    <div class="stat"><span class="muted small">Topic</span><b>${escapeHtml(payload.topic.toUpperCase())}</b></div>
    <div class="stat"><span class="muted small">Mode</span><b>${escapeHtml(payload.mode)}</b></div>
    <div class="stat"><span class="muted small">Score</span><b>${payload.correct}/${payload.total} (${pct}%)</b></div>
  `;
  const byCat = new Map();
  for (const q of state.questions) {
    const c = q.category || "General";
    const rec = byCat.get(c) || { total: 0, correct: 0 };
    rec.total += 1;
    const chosen = state.chosen.get(q.id);
    if (chosen && chosen === q.correct) rec.correct += 1;
    byCat.set(c, rec);
  }
  els.stats.innerHTML = "";
  for (const [cat, rec] of byCat.entries()) {
    const div = document.createElement("div");
    div.className = "histItem";
    div.innerHTML = `<div><b>${escapeHtml(cat)}</b><div class="muted small">${rec.correct}/${rec.total}</div></div>`;
    els.stats.appendChild(div);
  }
}
function quitQuiz() {
  clearTimer();
  showScreen("setup");
}
function clearHistoryLocal() {
  localStorage.removeItem("quizzy_local_results");
}
function saveLocalHistoryFallback(list) {
  localStorage.setItem("quizzy_local_results", JSON.stringify(list));
}
function readLocalHistoryFallback() {
  try {
    return JSON.parse(localStorage.getItem("quizzy_local_results") || "[]");
  } catch {
    return [];
  }
}
async function refreshHistory() {
  let list = await loadResults();
  if (!Array.isArray(list) || !list.length) {
    list = readLocalHistoryFallback();
  } else {
    saveLocalHistoryFallback(list);
  }
  els.history.innerHTML = "";
  if (!list.length) {
    els.history.innerHTML = `<div class="muted small">Немає результатів.</div>`;
    return;
  }
  const last = [...list].sort((a,b) => (b.ts||0) - (a.ts||0)).slice(0, 6);
  last.forEach(r => {
    const dt = r.ts ? new Date(r.ts).toLocaleString() : "";
    const div = document.createElement("div");
    div.className = "histItem";
    div.innerHTML = `
      <div>
        <b>${escapeHtml((r.topic || "topic").toUpperCase())}</b>
        <div class="muted small">${escapeHtml(r.mode || "normal")} • ${dt}</div>
      </div>
      <div><b>${r.correct}/${r.total}</b></div>
    `;
    els.history.appendChild(div);
  });
}
async function openStatsPage() {
  showScreen("stats");
  let list = await loadResults();
  if (!Array.isArray(list) || !list.length) list = readLocalHistoryFallback();
  const totalGames = list.length;
  const avg = totalGames
    ? Math.round(list.reduce((s, r) => s + (r.total ? (r.correct / r.total) : 0), 0) / totalGames * 100)
    : 0;
  els.statsSummary.innerHTML = `
    <div class="stat"><span class="muted small">Games</span><b>${totalGames}</b></div>
    <div class="stat"><span class="muted small">Avg score</span><b>${avg}%</b></div>
  `;
  const byTopic = new Map();
  for (const r of list) {
    const t = r.topic || "unknown";
    const rec = byTopic.get(t) || { games: 0, total: 0, correct: 0 };
    rec.games += 1;
    rec.total += (r.total || 0);
    rec.correct += (r.correct || 0);
    byTopic.set(t, rec);
  }
  els.statsByTopic.innerHTML = "";
  for (const [t, rec] of byTopic.entries()) {
    const pct = rec.total ? Math.round((rec.correct / rec.total) * 100) : 0;
    const div = document.createElement("div");
    div.className = "histItem";
    div.innerHTML = `<div><b>${escapeHtml(t.toUpperCase())}</b><div class="muted small">${rec.games} games</div></div><div><b>${pct}%</b></div>`;
    els.statsByTopic.appendChild(div);
  }
  els.statsLast.innerHTML = "";
  const last10 = [...list].sort((a,b) => (b.ts||0) - (a.ts||0)).slice(0, 10);
  last10.forEach(r => {
    const dt = r.ts ? new Date(r.ts).toLocaleString() : "";
    const pct = r.total ? Math.round((r.correct / r.total) * 100) : 0;
    const div = document.createElement("div");
    div.className = "histItem";
    div.innerHTML = `
      <div><b>${escapeHtml((r.topic||"topic").toUpperCase())}</b><div class="muted small">${dt} • ${escapeHtml(r.mode||"")}</div></div>
      <div><b>${pct}%</b></div>
    `;
    els.statsLast.appendChild(div);
  });
}
function wire() {
  const saved = localStorage.getItem("quizzy_theme");
  setTheme(saved === "light" ? "light" : "dark");
  els.themeLightBtn?.addEventListener("click", () => setTheme("light"));
  els.themeDarkBtn?.addEventListener("click", () => setTheme("dark"));
  els.startBtn?.addEventListener("click", startQuiz);
  els.openStatsBtn?.addEventListener("click", openStatsPage);
  els.goStatsBtn?.addEventListener("click", openStatsPage);
  els.backFromStatsBtn?.addEventListener("click", () => showScreen("setup"));
  els.prevBtn?.addEventListener("click", goPrev);
  els.nextBtn?.addEventListener("click", () => goNext(false));
  els.skipBtn?.addEventListener("click", skipQuestion);
  els.finishBtn?.addEventListener("click", finishQuiz);
  els.quitBtn?.addEventListener("click", quitQuiz);
  els.restartBtn?.addEventListener("click", startQuiz);
  els.backBtn?.addEventListener("click", () => showScreen("setup"));
  els.clearHistoryBtn?.addEventListener("click", async () => {
    clearHistoryLocal();
    await refreshHistory();
  });
  window.addEventListener("keydown", (e) => {
    if (!els.screenQuiz.classList.contains("active")) return;
    if (e.key === "Escape") quitQuiz();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "ArrowRight") goNext(false);
    const n = Number(e.key);
    if (n >= 1 && n <= 4) {
      const q = state.questions[state.index];
      if (!q) return;
      const ans = q.answers[n - 1];
      if (ans) pickAnswer(ans);
    }
  });
  refreshHistory();
}
document.addEventListener("DOMContentLoaded", wire);
