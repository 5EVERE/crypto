"use strict";

const headerLinks = document.querySelector(".header__ul");
const footerLinks = document.querySelector(".footer__links");

const smoothScroll = function (links) {
  links.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("header__link")) {
      const href = e.target.getAttribute("href");
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
};
smoothScroll(headerLinks);
smoothScroll(footerLinks);

const headerLink = document.querySelectorAll(".header__link");
const navColor = function (e, opacity) {
  if (e.target.classList.contains("header__link")) {
    headerLink.forEach((elem) => {
      if (elem !== e.target) {
        elem.style.opacity = opacity;
      }
    });
    document.querySelector(".header__logo").style.opacity = opacity;
    document.querySelector(".header__buttons").style.opacity = opacity;
  }
};
headerLinks.addEventListener("mouseover", function (e) {
  navColor(e, 0.5);
});
headerLinks.addEventListener("mouseout", function (e) {
  navColor(e, 1);
});

const cryptoArrow = document.querySelectorAll(".crypto__arr");
const cryptoButton = document.querySelectorAll(".crypto__button");

cryptoButton.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#mining").scrollIntoView({ behavior: "smooth" });
  });
});
const cryptoItems = document.querySelector(".crypto__items");
cryptoItems.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("crypto__arr")) {
    cryptoArrow.forEach((arrow) => {
      arrow.closest(".crypto__item").classList.remove("active");
      arrow
        .closest(".crypto__arrow")
        .nextElementSibling.classList.add("hidden");
      arrow.closest(".crypto__arrow").classList.remove("hidden");

      e.target.closest(".crypto__arrow").classList.add("hidden");
      e.target.closest(".crypto__item").classList.add("active");
      e.target
        .closest(".crypto__arrow")
        .nextElementSibling.classList.remove("hidden");
    });
  }
});
