const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector("nav");
const main = document.querySelector("main"); // Sélectionnez l'overlay

const toggleMenu = () => {
  nav.classList.toggle("active");
  main.classList.toggle("overlay");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
};

hamburgerIcon.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);
