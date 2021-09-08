/* burger menu */

const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

if (menuIcon) {
  menuIcon.addEventListener("click", function () {
    document.body.classList.toggle("locked");
    menuIcon.classList.toggle("menu__icon--active");
    menuBody.classList.toggle("menu__body--active");
  });
}

/* smooth scroll */
const menulinks = document.querySelectorAll("[data-scrollTo]");

if (menulinks.length > 0) {
  menulinks.forEach((menuLink) => {
    menuLink.addEventListener("click", function (e) {
      const scrollTo = e.target.dataset.scrollto;
      const scrollToBlock = document.querySelector(scrollTo);
      const scrollToBlockValue = scrollToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;

      if (scrollTo && scrollToBlock) {
        e.preventDefault();

        window.scrollTo({
          top: scrollToBlockValue,
          behavior: "smooth",
        });
      }

      if (menuIcon.classList.contains("menu__icon--active")) {
        document.body.classList.remove("locked");
        menuIcon.classList.remove("menu__icon--active");
        menuBody.classList.remove("menu__body--active");
      }
    });
  });
}

/* sticky header on scroll*/
const header = document.querySelector(".header");
const sticky = header.offsetTop;

window.onscroll = function () {
  if (window.pageYOffset > sticky) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
};
