// Typing Animation
const typingText = document.getElementById("typing-text");
const phrases = ["Web Developer", "React Enthusiast", "UI/UX Designer"];
let phraseIndex = 0;
let charIndex = 0;
let currentPhrase = "";
let isDeleting = false;

function type() {
  currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex++);
    if (charIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }
  setTimeout(type, isDeleting ? 50 : 120);
}
document.addEventListener("DOMContentLoaded", () => {
  type();
  AOS.init();
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) update();
  }, { threshold: 1 });

  observer.observe(counter);
});
