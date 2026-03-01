(function () {
  "use strict";

  // ——— Section fade-in on scroll ———
  function initScrollReveal() {
    var heroContent = document.querySelector(".hero-content");
    if (heroContent) {
      heroContent.classList.add("in-view");
    }
    var sections = document.querySelectorAll(".section-inner");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    sections.forEach(function (el) { observer.observe(el); });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollReveal);
  } else {
    initScrollReveal();
  }

  // ——— Smooth scroll ———
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = this.getAttribute("href");
      if (id === "#") return;
      var el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ——— Form submit ———
  var form = document.querySelector(".apply-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = "Submitting…";
        btn.disabled = true;
      }
      // Replace with your endpoint
      setTimeout(function () {
        if (btn) {
          btn.textContent = "Request My DM Revenue Audit";
          btn.disabled = false;
        }
        alert("Application received. We'll review within 48 hours and be in touch.");
      }, 600);
    });
  }
})();
