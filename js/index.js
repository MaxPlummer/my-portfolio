const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
  document.querySelector(".hamburger").classList.toggle("fa-times");
  document.querySelector(".hamburger").classList.toggle("close");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    document.querySelector(".hamburger").classList.remove("fa-times");
    document.querySelector(".hamburger").classList.remove("close");
  });
});
