// ===== LOADER =====
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("is-hidden");
  }, 900);
});

// ===== NAV SCROLL STATE =====
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) nav.classList.add("is-scrolled");
  else nav.classList.remove("is-scrolled");
}, { passive: true });

// ===== REVEAL ON SCROLL =====
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.querySelectorAll(".concept__heading .reveal").forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.15}s`;
});

// ===== Burger / Drawer =====
const burger = document.querySelector(".nav__burger");
const drawer = document.getElementById("navDrawer");

const closeDrawer = () => {
  burger.classList.remove("is-open");
  drawer.classList.remove("is-open");
  document.body.style.overflow = "";
};

if (burger && drawer) {
  burger.addEventListener("click", () => {
    const open = burger.classList.toggle("is-open");
    drawer.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  drawer.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeDrawer);
  });
}

// ===== ESC closes drawer =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});
