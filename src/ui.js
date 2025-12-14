export function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

export function renderHistory(container, history) {
  if (!history.length) {
    container.innerHTML = `<div class="kv">Немає результатів.</div>`;
    return;
  }
  container.innerHTML = history.map(h => `
    <div class="histItem">
      <div><b>${h.correct}/${h.total}</b> (${h.percent}%)</div>
      <div class="kv">${new Date(h.date).toLocaleString()}</div>
    </div>
  `).join("");
}

export function renderStats(container, stats) {
  if (!stats.length) {
    container.innerHTML = `<div class="kv">Немає статистики.</div>`;
    return;
  }
  container.innerHTML = stats.map(s => `
    <div class="histItem">
      <div><b>${escapeHtml(s.category)}</b></div>
      <div class="kv">${s.correct}/${s.total}</div>
    </div>
  `).join("");
}

export function renderTopbar({ index, total, timeLeft, hasTimer }) {
  document.getElementById("progressText").textContent = `${index + 1}/${total}`;
  document.getElementById("progressFill").style.width = `${Math.round(((index + 1) / total) * 100)}%`;

  const t = document.getElementById("timer");
  if (!hasTimer) {
    t.classList.add("hidden");
    return;
  }
  t.classList.remove("hidden");
  t.textContent = String(timeLeft).padStart(2, "0");
  t.classList.toggle("danger", timeLeft <= 5);
}

export function renderQuestion({ q, chosen, onChoose, revealState }) {
  document.getElementById("category").textContent = q.category;
  document.getElementById("question").textContent = q.question;

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  q.answers.forEach((a) => {
    const btn = document.createElement("button");
    btn.className = "answer";

    if (chosen === a) btn.classList.add("selected");
    if (revealState) {
      if (a === revealState.correct) btn.classList.add("correct");
      if (revealState.chosen && a === revealState.chosen && a !== revealState.correct) btn.classList.add("wrong");
      btn.disabled = true;
    }

    btn.textContent = a;
    btn.addEventListener("click", () => onChoose(a));
    answers.appendChild(btn);
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
