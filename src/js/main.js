console.log("Hello World!");

("use strict");

// Searchox show
function searchBoxShow() {
  const searchOpen = document.getElementById("searchOpen");
  const searchClose = document.getElementById("searchClose");
  const searchBox = document.getElementById("searchBox");

  searchOpen.addEventListener("click", function () {
    searchBox.style.display = "flex";
  });

  searchClose.addEventListener("click", function () {
    searchBox.style.display = "none";
  });
}

searchBoxShow();

// Mobile-Nav show
function mobileNavShow() {
  const navMenuBtn = document.getElementById("navMenuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const burgerIcon = document.querySelector("#navMenuBtn img");
  const closeIcon = document.querySelector("#navMenuBtn span");

  navMenuBtn.addEventListener("click", function () {
    mobileNav.style.display === "block"
      ? (mobileNav.style.display = "none")
      : (mobileNav.style.display = "block");

    burgerIcon.style.display === "none"
      ? (burgerIcon.style.display = "block")
      : (burgerIcon.style.display = "none");

    closeIcon.style.display === "block"
      ? (closeIcon.style.display = "none")
      : (closeIcon.style.display = "block");
  });
}

mobileNavShow();
