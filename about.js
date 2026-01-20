// Optional: animate the hero text fade in
window.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-text");
    heroText.style.opacity = 0;
    heroText.style.transform = "translateY(30px)";
    setTimeout(() => {
        heroText.style.transition = "all 1s ease";
        heroText.style.opacity = 1;
        heroText.style.transform = "translateY(0)";
    }, 200);
});
