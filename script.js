const logoWidth = `${document.querySelector(".header__logo").clientWidth}px`;
document.querySelector(".main__explore").style.minWidth = logoWidth;
document
  .querySelectorAll(".info__block-title")
  .forEach((item) => (item.style.minWidth = logoWidth));

// document.addEventListener("DOMContentLoaded", function () {
//   const burgerMenu = document.querySelector(".burger-menu");
//   const navList = document.querySelector(".nav__list");

//   burgerMenu.addEventListener("click", function () {
//     navList.classList.toggle("nav__list--active");
//   });
// });
