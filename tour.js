document.addEventListener("DOMContentLoaded", () => {
  // ── SCROLL REVEAL ANIMATION ────────────────────────────────────────
  const scrollElements = document.querySelectorAll(".scroll-animate");

  const scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 },
  );

  scrollElements.forEach((el) => scrollObserver.observe(el));

  // ── LAZY LOADING IMAGES ────────────────────────────────────────────
  const lazyImages = document.querySelectorAll("img[data-src]");

  const imgObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imgObserver.unobserve(img);
        }
      });
    },
    { rootMargin: "150px 0px", threshold: 0.01 },
  );

  lazyImages.forEach((img) => imgObserver.observe(img));

  // ── REUSABLE SLIDER FUNCTION ───────────────────────────────────────
  function setupSlider(
    containerSelector,
    trackSelector = ".slider-track",
    interval = 6000,
  ) {
    const container = document.querySelector(containerSelector);
    if (!container) return null;

    const track = trackSelector
      ? container.querySelector(trackSelector)
      : container; // for highlights-slider where track is the container itself

    if (!track) return null;

    const slides = track.children;
    const totalSlides = slides.length;
    if (totalSlides <= 1) return null;

    let currentIndex = 0;
    let autoSlideInterval = null;

    function goToSlide(index) {
      currentIndex = (index + totalSlides) % totalSlides;
      track.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    // Auto sliding
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, interval);
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    // Start auto slide
    startAutoSlide();

    // Pause on hover
    container.addEventListener("mouseenter", stopAutoSlide);
    container.addEventListener("mouseleave", startAutoSlide);

    return { nextSlide, prevSlide, goToSlide };
  }

  // ── INITIALIZE SLIDERS ─────────────────────────────────────────────

  //  Main Highlights Slider (full-width hero style - 3 slides)
  const highlightsSlider = setupSlider(".highlights-slider", null, 6500);

  //  Other section sliders (like conference/adventure slider-track)
  const sectionSliders = document.querySelectorAll(".slider-track");
  sectionSliders.forEach((track) => {
    const container = track.closest("section") || track.parentElement;
    setupSlider(`#${container.id}`, ".slider-track", 5000); // adjust if you give IDs
    // Note: if you want to control them separately, give each section an ID
  });

  document.querySelectorAll(".slider-next").forEach((btn) => {
    btn.addEventListener("click", () => {
      const slider = btn.closest(
        ".conference-slider, .slider-container, .highlights-section",
      );
      if (slider && highlightsSlider) highlightsSlider.nextSlide(); // adjust per slider
    });
  });

  document.querySelectorAll(".slider-prev").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (highlightsSlider) highlightsSlider.prevSlide();
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openBooking");
  const modal = document.getElementById("bookingModal");
  const closeBtn = document.getElementById("closeModal");
  const form = document.getElementById("bookingForm");

  // Open modal
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Close when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // Form validation
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      alert("Please fill out all required fields.");
      return;
    }

    alert("Thank you! Your booking request has been submitted.");
    form.reset();
    modal.classList.remove("active");
  });
});
