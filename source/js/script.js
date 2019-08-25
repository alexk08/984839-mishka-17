document.querySelector(".nav__button-menu").classList.remove("no-js");
document.querySelector(".nav__list--right").classList.remove("no-js");
document.querySelector(".nav__list--left").classList.remove("no-js");
document.querySelector(".nav__list--right").classList.add("js-menu-close");
document.querySelector(".nav__list--left").classList.add("js-menu-close");

var menuButton = document.querySelector(".nav__button-menu");
var menuList = document.querySelectorAll(".js-menu-close");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < menuList.length; i++) {
    if (menuList[i].classList.contains("js-menu-close")) {
      menuList[i].classList.remove("js-menu-close");
      menuList[i].classList.add("js-menu");
      menuButton.classList.add("active");
    } else {
      menuList[i].classList.remove("js-menu");
      menuList[i].classList.add("js-menu-close");
      menuButton.classList.remove("active");
    }
  }
});

var link = document.querySelector(".js-order-button");
var links = document.querySelectorAll(".js-to-cart-button");
var popup = document.querySelector(".modal-add-cart");
var bgWhite = document.querySelector(".overlay");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("show");
    bgWhite.classList.add("show");
  });
}

if (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("show");
    bgWhite.classList.add("show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("show") || bgWhite.classList.contains("show")) {
      popup.classList.remove("show");
      bgWhite.classList.remove("show");
    }
  }
});

bgWhite.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("show") || bgWhite.classList.contains("show")) {
      popup.classList.remove("show");
      bgWhite.classList.remove("show");
    }
});
