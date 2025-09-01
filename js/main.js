// main.js

// Fade-in effect on page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Optional: preload audio samples
const preloadAudio = () => {
  const audioFiles = [
    "assets/audio/smooth-jazz.mp3",
    "assets/audio/soul-groove.mp3"
  ];
  audioFiles.forEach(src => {
    const audio = new Audio();
    audio.src = src;
  });
};

preloadAudio();
