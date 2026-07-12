// Marque le lien de navigation correspondant à la page actuelle comme actif
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("nav-active");
    }
  });

  // Année dynamique dans le footer au niveau de tous droits reservés là
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Affiche un message de succès après soumission du form Netlify
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          contactForm.reset();
          contactForm.classList.add("hidden");
          document.getElementById("form-success").classList.remove("hidden");
        })
        .catch((error) => {
          console.error("Erreur d'envoi du formulaire :", error);
          alert("Une erreur est survenue. Merci de réessayer ou de nous écrire directement à himaogroup@gmail.com.");
        });
    });
  }

  // Bouton "retour en haut" : apparaît après un peu de défilement
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    const toggleBackToTop = () => {
      const visible = window.scrollY > 400;
      backToTopBtn.classList.toggle("opacity-0", !visible);
      backToTopBtn.classList.toggle("pointer-events-none", !visible);
      backToTopBtn.classList.toggle("translate-y-4", !visible);
    };

    toggleBackToTop();
    window.addEventListener("scroll", toggleBackToTop, { passive: true });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});