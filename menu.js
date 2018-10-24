"use strict";

function navToggle() {
  let burger = document.querySelector(".burger__container");
  let navOpen = document.querySelector(".ul__menu");

  burger.addEventListener("click", function() {
    navOpen.classList.toggle("open-nav");
  });
}

navToggle();
