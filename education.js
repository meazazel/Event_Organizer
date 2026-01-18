const sections = document.querySelectorAll(".scroll-animate");

const reveal = () => {
    sections.forEach(s => {
        if (s.getBoundingClientRect().top < window.innerHeight - 100) {
            s.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

document.getElementById("eduForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Educational event application submitted successfully.");
});
