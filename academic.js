// Scroll reveal animation
const animatedSections = document.querySelectorAll(".scroll-animate");

const revealOnScroll = () => {
    animatedSections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Seminar form handler
document.getElementById("seminarForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Seminar hosting application submitted successfully.");
    this.reset();
});
