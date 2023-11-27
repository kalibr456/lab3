const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
  menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);

const portfolioBtn = document.querySelector(".portfolio__btn");
const portfolioList = document.querySelector(".portfolio__list");

portfolioBtn.addEventListener("click", togglePortfolioVisibility);

function togglePortfolioVisibility() {
  portfolioList.classList.toggle("hide");
}
