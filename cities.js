// Simple scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".city-card, .intro-section").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.7s ease-out";
  observer.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".city-card.visible").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
});

// Modal functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const caption = document.getElementById("modalCaption");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll(".city-card").forEach((card) => {
  card.addEventListener("click", () => {
    modalImg.src = card.getAttribute("data-full");
    caption.textContent = card.getAttribute("data-title");
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Close with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
  }
});
