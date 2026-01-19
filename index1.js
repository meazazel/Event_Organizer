// First carousel
(function() {
  let navIndex = 0; 
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.service');
  const total = slides.length;

  function slideNav() {
    navIndex++;
    const width = document.querySelector('.carousel').offsetWidth;
    
    track.style.transition = "transform 0.8s ease";
    track.style.transform = `translateX(-${navIndex * width}px)`;

    if (navIndex === total - 1) {
      setTimeout(() => {
        track.style.transition = "none";
        navIndex = 0;
        track.style.transform = `translateX(0px)`;
      }, 800);
    }
  }

  setInterval(slideNav, 3000);
})();

// Second slider
(function() {
  const track = document.querySelector(".slider-track");
  const slides = document.querySelectorAll(".slide");
  let index = 0;
  const gap = 40;
  let slideWidth = slides[0].offsetWidth + gap;

  function moveSlider() {
    index++;
    track.style.transition = "transform 1s ease-in-out";
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    if (index >= slides.length / 2) {
      setTimeout(() => {
        track.style.transition = "none";
        index = 0;
        track.style.transform = `translateX(0)`;
      }, 1000);
    }
  }

  setInterval(moveSlider, 3200);

  window.addEventListener("resize", () => {
    slideWidth = slides[0].offsetWidth + gap;
  });
})();

// Drag slider
const viewport = document.querySelector(".slider-viewport");
const track = document.querySelector(".slider-track");

let isDown = false;
let startX;
let scrollX = 0;

viewport.addEventListener("mousedown", (e) => {
    isDown = true;
    viewport.classList.add("active");
    startX = e.pageX;
});

viewport.addEventListener("mouseleave", () => {
    isDown = false;
});

viewport.addEventListener("mouseup", () => {
    isDown = false;
});

viewport.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX;   
    track.style.transform = `translateX(${scrollX + walk}px)`;
});

viewport.addEventListener("mouseup", () => {
    scrollX += event.pageX - startX;
});

function scrollToServices() {
    const servicesSection = document.getElementById("services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
}
