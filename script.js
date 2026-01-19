/* ===============================
   INTERACTIVE EFFECTS SCRIPT
   =============================== */

/* ===== BOOKING MODAL FUNCTIONS ===== */
function openBooking(eventName) {
    const modal = document.getElementById("bookingModal");
    const eventSelect = document.getElementById("eventType");

    if (modal) modal.style.display = "flex";
    if (eventSelect) eventSelect.value = eventName;
}

function closeBooking() {
    const modal = document.getElementById("bookingModal");
    if (modal) modal.style.display = "none";
}

/* Close modal when clicking outside */
window.onclick = function (e) {
    const modal = document.getElementById("bookingModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", () => {

    /* ===== Smooth Scrolling ===== */
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href"))?.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    /* ===== Card Active Effect ===== */
    document.querySelectorAll(".cards").forEach(card => {
        card.addEventListener("click", () => {
            document.querySelectorAll(".cards").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });

    /* ===== Button Feedback ===== */
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", () => {
            const original = button.innerText;
            button.innerText = "Processing...";
            button.disabled = true;

            setTimeout(() => {
                button.innerText = original;
                button.disabled = false;
            }, 1200);
        });
    });

    /* ===== Scroll Reveal ===== */
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

});






/* =============================== GLOBAL EVENT JS ================================ */
document.addEventListener("DOMContentLoaded", () => {

    /* =============================== 0. EVENT CARD NAVIGATION ================================ */
    document.querySelectorAll(".event-card").forEach(card => {
        card.addEventListener("click", () => {
            const page = card.dataset.page;
            if (page) {
                window.location.href = page;
            }
        });
    });

    /* =============================== 1. SCROLL REVEAL ================================ */
    const animatedItems = document.querySelectorAll(".scroll-animate");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    animatedItems.forEach(item => observer.observe(item));

    /* =============================== 2. HERO PARALLAX ================================ */
    const hero = document.querySelector(".hero");
    window.addEventListener("scroll", () => {
        if (hero) hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
    });

    /* =============================== 3. SMOOTH SCROLL ================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
        });
    });

    /* =============================== 4. TESTIMONIAL SLIDER ================================ */
    const testimonials = document.querySelectorAll(".testimonial");
    let index = 0;
    if (testimonials.length > 1) {
        testimonials.forEach((t, i) => t.style.display = i === 0 ? "block" : "none");
        setInterval(() => {
            testimonials[index].style.display = "none";
            index = (index + 1) % testimonials.length;
            testimonials[index].style.display = "block";
        }, 4000);
    }

    /* =============================== 5. BUTTON RIPPLE ================================ */
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", e => {
            const ripple = document.createElement("span");
            ripple.className = "ripple";
            const rect = btn.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    /* =============================== 6. BOOKING MODAL ================================ */
    const modal = document.getElementById("bookingModal");
    const closeBtn = document.getElementById("closeBooking");
    const eventSelect = document.getElementById("eventType");

    document.querySelectorAll(".btn-book").forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();

            const eventName = btn.dataset.event;
            if (eventName && eventSelect) {
                eventSelect.value = eventName;
            }

            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    closeBtn?.addEventListener("click", closeModal);
    modal?.addEventListener("click", e => {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    /* =============================== 7. BOOKING FORM VALIDATION ================================ */
    const bookingForm = document.getElementById("bookingForm");
    bookingForm?.addEventListener("submit", e => {
        e.preventDefault();

        let valid = true;
        bookingForm.querySelectorAll("input, select, textarea").forEach(field => {
            if (!field.value.trim()) {
                field.style.border = "2px solid red";
                valid = false;
            } else {
                field.style.border = "1px solid #ccc";
            }
        });

        if (!valid) {
            alert("Please fill all required fields.");
            return;
        }

        alert("Your booking has been submitted successfully!");
        bookingForm.reset();
        closeModal();
    });

});
