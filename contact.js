const form = document.getElementById("contact-form");
const status = document.querySelector(".form-status");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Simple front-end validation & simulate sending
    status.textContent = "Sending...";
    setTimeout(() => {
        status.textContent = "Thank you! Your message has been sent.";
        form.reset();
    }, 1200);
});
