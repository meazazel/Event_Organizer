// business.js

document.addEventListener('DOMContentLoaded', () => {
    /* ================= SCROLL REVEAL ================= */
    const reveals = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );
    reveals.forEach(el => observer.observe(el));

    /* ================= LAZY LOAD IMAGES ================= */
    const lazyImages = document.querySelectorAll('img');
    const imgObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting && entry.target.dataset.src) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.removeAttribute('data-src');
                    imgObserver.unobserve(entry.target);
                }
            });
        },
        { rootMargin: '100px 0px', threshold: 0.01 }
    );
    lazyImages.forEach(img => {
        if(img.dataset.src) imgObserver.observe(img);
    });

    /* ================= SLIDER UTILITY ================= */
    function setupSlider(sliderSelector, trackSelector, interval = 5000) {
        const slider = document.querySelector(sliderSelector);
        const track = slider.querySelector(trackSelector);
        const slides = track.children;
        let currentIndex = 0;

        // Auto slide
        let autoSlide = setInterval(nextSlide, interval);

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Pause on hover
        slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
        slider.addEventListener('mouseleave', () => autoSlide = setInterval(nextSlide, interval));

        return { nextSlide, prevSlide };
    }

    /* ================= SETUP SLIDERS ================= */
    const conferenceSlider = setupSlider('.conference-slider', '.slider-track', 5000);
    const highlightsSlider = setupSlider('.highlights-slider', '', 7000); // horizontal auto-slide

    /* ================= OPTIONAL: ADD BUTTON CONTROLS ================= */
    document.querySelectorAll('.slider-next').forEach(btn => {
        btn.addEventListener('click', () => conferenceSlider.nextSlide());
    });
    document.querySelectorAll('.slider-prev').forEach(btn => {
        btn.addEventListener('click', () => conferenceSlider.prevSlide());
    });
});
