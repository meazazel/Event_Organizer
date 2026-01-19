// =====================
// ABOUT PAGE JS
// =====================

// ===== SERVICES SLIDER =====
(function() {
    const track = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const viewport = document.querySelector(".slider-viewport");
    let index = 0;
    const gap = 40;
    let slideWidth = slides[0].offsetWidth + gap;

    function updateWidth() {
        slideWidth = slides[0].offsetWidth + gap;
    }

    window.addEventListener("resize", updateWidth);

    function moveSlider() {
        track.style.transition = "transform 0.6s ease";
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < slides.length - 1) index++;
        else index = 0;
        moveSlider();
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) index--;
        else index = slides.length - 1;
        moveSlider();
    });

    /* AUTO SLIDE */
    let autoSlide = setInterval(() => {
        index++;
        if (index > slides.length - 1) index = 0;
        moveSlider();
    }, 3500);

    /* DRAG SUPPORT */
    let isDown = false;
    let startX;
    let scrollStart;

    viewport.addEventListener("mousedown", e => {
        isDown = true;
        startX = e.pageX;
        scrollStart = index * slideWidth;
        track.style.transition = "none";
    });

    window.addEventListener("mouseup", e => {
        if (!isDown) return;
        isDown = false;

        const diff = e.pageX - startX;
        if (diff < -50 && index < slides.length - 1) index++;
        if (diff > 50 && index > 0) index--;

        moveSlider();
    });

    viewport.addEventListener("mousemove", e => {
        if (!isDown) return;
        e.preventDefault();
        const diff = e.pageX - startX;
        track.style.transform = `translateX(-${scrollStart - diff}px)`;
    });

})();

// ===== SCROLL TO SERVICES =====
function scrollToServices() {
    const servicesSection = document.getElementById("services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
}

// ===== PORTFOLIO BUTTON =====
// Make any button with class "portfolio-btn" go to portfolio page
document.querySelectorAll(".portfolio-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        window.location.href = "portfolio.html";
    });
});

// ===== OPTIONAL: OTHER SCRIPTS CAN GO BELOW =====
// Add other JS features here if needed
