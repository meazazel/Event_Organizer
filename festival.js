/* =============================== GLOBAL FESTIVAL JS ================================ */
document.addEventListener("DOMContentLoaded", () => {

    /* =============================== 1. SCROLL REVEAL ================================ */
    const animatedItems = document.querySelectorAll(".scroll-animate");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    animatedItems.forEach(item => observer.observe(item));

    /* =============================== 2. HERO PARALLAX EFFECT ================================ */
    const hero = document.querySelector(".hero-festival");
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        if (hero) hero.style.backgroundPositionY = `${scrollY * 0.4}px`;
    });

    /* =============================== 3. SMOOTH SCROLL FOR LINKS ================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute("href"));
            target?.scrollIntoView({ behavior: "smooth" });
        });
    });

    /* =============================== 4. TESTIMONIAL AUTO SLIDER ================================ */
    const testimonials = document.querySelectorAll(".testimonial-card");
    let testimonialIndex = 0;
    if (testimonials.length > 1) {
        testimonials.forEach((t, i) => t.style.display = i === 0 ? "block" : "none");
        setInterval(() => {
            testimonials[testimonialIndex].style.display = "none";
            testimonialIndex = (testimonialIndex + 1) % testimonials.length;
            testimonials[testimonialIndex].style.display = "block";
        }, 4000);
    }

    /* =============================== 5. BUTTON RIPPLE EFFECT ================================ */
    document.querySelectorAll(".btn-register").forEach(button => {
        button.addEventListener("click", function (e) {
            const ripple = document.createElement("span");
            ripple.className = "ripple";
            const rect = this.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    /* =============================== 6. CONTACT FORM VALIDATION ================================ */
    const contactForm = document.querySelector(".contact-form");
    contactForm?.addEventListener("submit", e => {
        e.preventDefault();
        const inputs = contactForm.querySelectorAll("input");
        let valid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.border = "2px solid red";
                valid = false;
            } else {
                input.style.border = "1px solid #b6b0b0";
            }
        });
        if (!valid) {
            alert("Please fill in all required fields.");
            return;
        }
        alert("Thank you! Your message has been sent successfully.");
        contactForm.reset();
    });

    /* =============================== 7. SCROLL PROGRESS INDICATOR ================================ */
    const progressBar = document.createElement("div");
    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.height = "4px";
    progressBar.style.background = "#ff00dd"; // festival pink
    progressBar.style.zIndex = "9999";
    document.body.appendChild(progressBar);
    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + "%";
    });

    /* =============================== 8. IMAGE & SERVICE HOVER DEPTH EFFECT ================================ */
    document.querySelectorAll(".floating-img, .service-media img").forEach(img => {
        img.addEventListener("mousemove", e => {
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = (y / rect.height - 0.5) * 12;
            const rotateY = (x / rect.width - 0.5) * -12;
            img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "rotateX(0) rotateY(0) scale(1)";
        });
    });

    /* =============================== 9. FLOATING SERVICE CARDS (CONTINUOUS) ================================ */
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        let direction = 1;
        let offset = 0;
        setInterval(() => {
            offset += 0.2 * direction;
            if (offset > 5 || offset < -5) direction *= -1;
            card.style.transform = `translateY(${offset}px)`;
        }, 40);
    });

    /* =============================== 10. FESTIVAL BOOKING MODAL ================================ */
    const modal = document.getElementById("bookingModal");
    const closeBtn = document.getElementById("closeModal");

    // Open modal when ANY .btn-register is clicked
    document.querySelectorAll(".btn-register").forEach(btn => {
        btn.addEventListener("click", e => {
            if (btn.getAttribute("href") === "#") e.preventDefault();
            modal.classList.add("active");
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("active"); });

    // Booking form validation
    const bookingForm = document.getElementById("festivalBookingForm");
    bookingForm.addEventListener("submit", e => {
        e.preventDefault();
        const fields = bookingForm.querySelectorAll("input, select, textarea");
        let valid = true;
        fields.forEach(f => {
            if (!f.value.trim()) {
                f.style.border = "2px solid red";
                valid = false;
            } else {
                f.style.border = "1px solid #dbd5d5";
            }
        });
        if (!valid) {
            alert("Please fill all required fields.");
            return;
        }
        alert("Festival booking submitted successfully!");
        bookingForm.reset();
        modal.classList.remove("active");
    });

});
