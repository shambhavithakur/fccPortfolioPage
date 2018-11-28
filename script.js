// Open-close navigation list
var togglerOpen = document.querySelector(".open-button");
var navListOpen = document.querySelector("#navbar");
var getOverlay = document.querySelector(".overlay");
var getNavLinks = document.querySelectorAll(".nav-link");
var getNavbarBackground = document.querySelector(".navbar-background");

function openNavlist(event) {
  event.preventDefault();
  togglerOpen.classList.toggle("open-list");
  navListOpen.classList.toggle("navlist-open");
  getOverlay.classList.toggle("overlay-visible");
}

function closeNavlist(event) {
  event.preventDefault();
  togglerOpen.classList.remove("open-list");
  navListOpen.classList.remove("navlist-open");
  getOverlay.classList.remove("overlay-visible");
}

togglerOpen.addEventListener("click", openNavlist);
getOverlay.addEventListener("click", closeNavlist);

for (var i = 0; i < getNavLinks.length; i++) {
  getNavLinks[i].addEventListener("click", function() {
    togglerOpen.classList.remove("open-list");
    navListOpen.classList.remove("navlist-open");
    getOverlay.classList.remove("overlay-visible");
  });
}

// Active-link color for larger viewports
for (var j = 0; j < getNavLinks.length; j++) {
  getNavLinks[j].addEventListener("click", function() {
    var activeLink = document.getElementsByClassName("active-link");
    if (activeLink.length != 0) {
      activeLink[0].classList.remove("active-link");
    }
    this.classList.add("active-link");
  });
}
