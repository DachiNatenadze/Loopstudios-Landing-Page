let burger = document.querySelector(".burgerMenu");
let burgerActive = document.querySelector(".burgerActive");
burger.addEventListener("click", () => {
  burgerActive.classList.toggle("burgerActive");
});
let close = document.querySelector(".x");
close.addEventListener("click", () => {
  burgerActive.classList.toggle("burgerActive");
});
