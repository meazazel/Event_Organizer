// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".safari-card, .intro-section").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.9s ease-out";
  observer.observe(el);
});

// Modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const caption = document.getElementById("modalCaption");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll(".safari-card").forEach((card) => {
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
  if (e.target === modal) modal.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
  }
});
