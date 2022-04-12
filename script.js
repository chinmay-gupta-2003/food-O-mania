const btnNavEl1 = document.querySelector(".mob-nav-icon-menu");
const headerEl = document.querySelector(".main-header");

btnNavEl1.addEventListener("click", function () {
  headerEl.classList.toggle("open-mob-nav");
});

const btnNavEl2 = document.querySelector(".mob-nav-icon-close");

btnNavEl2.addEventListener("click", function () {
  headerEl.classList.toggle("open-mob-nav");
});
