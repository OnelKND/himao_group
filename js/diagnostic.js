// Moteur générique pour les diagnostics/quiz scorés (export, gestion de projet, maturité numérique...)
function initDiagnostic(config) {
  const form = document.getElementById(config.formId);
  const resultSection = document.getElementById(config.resultId);
  if (!form || !resultSection) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    let score = 0;
    for (const value of data.values()) {
      score += Number(value) || 0;
    }

    const percent = Math.max(0, Math.min(100, Math.round((score / config.maxScore) * 100)));
    const tier =
      config.thresholds.find((t) => score >= t.min && score <= t.max) ||
      config.thresholds[config.thresholds.length - 1];

    const radial = document.getElementById(config.radialId);
    if (radial) {
      radial.style.setProperty("--value", percent);
      radial.textContent = percent + "%";
    }

    // La jauge circulaire (mask + conic-gradient CSS) ne s'imprime pas de
    // façon fiable : on affiche un score texte à la place à l'impression.
    const scorePrintEl = document.getElementById(config.scorePrintId);
    if (scorePrintEl) scorePrintEl.textContent = "Score : " + percent + "%";

    const titleEl = document.getElementById(config.scoreTitleId);
    if (titleEl) titleEl.textContent = tier.label;

    const textEl = document.getElementById(config.scoreTextId);
    if (textEl) textEl.textContent = tier.text;

    const nextEl = document.getElementById(config.nextStepsId);
    if (nextEl && tier.next) {
      nextEl.innerHTML = "";
      tier.next.forEach((step) => {
        const li = document.createElement("li");
        li.textContent = step;
        nextEl.appendChild(li);
      });
    }

    form.classList.add("hidden");
    resultSection.classList.remove("hidden");
    resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const restartBtn = document.getElementById(config.restartId);
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      form.reset();
      resultSection.classList.add("hidden");
      form.classList.remove("hidden");
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}
