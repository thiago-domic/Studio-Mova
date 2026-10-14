// MOVA STUDIO® — interações do site
// Coloque seu telefone com código do país + DDD, apenas números.
// Exemplo fictício: "5511999999999"
const WHATSAPP_NUMBER = "";

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    menuToggle.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
    nav.classList.toggle("open", !open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    nav.classList.remove("open");
  }));
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const whatsapp = document.querySelector("#whatsapp");
if (whatsapp && WHATSAPP_NUMBER) {
  const message = encodeURIComponent("Olá, MOVA STUDIO! Quero conversar sobre um projeto.");
  whatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

const carousel = document.querySelector(".carousel");
const track = document.querySelector("#track");
if (carousel && track) {
  const distance = () => {
    const tile = track.querySelector(".tile");
    return tile ? tile.getBoundingClientRect().width + 16 : 280;
  };
  document.querySelector("#prev")?.addEventListener("click", () => carousel.scrollBy({left: -distance(), behavior: "smooth"}));
  document.querySelector("#next")?.addEventListener("click", () => carousel.scrollBy({left: distance(), behavior: "smooth"}));
}

const targets = document.querySelectorAll(".hero h1, .section-head, .tile, .project, .service-list a, .manifesto-bottom, .contact-bottom");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.body.classList.add("motion-ready");
  targets.forEach((el, i) => { el.dataset.reveal = ""; el.style.transitionDelay = `${(i % 4) * 70}ms`; });
  const observer = new IntersectionObserver((entries, obs) => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); }
  }), {threshold: 0.12});
  targets.forEach(el => observer.observe(el));
}
