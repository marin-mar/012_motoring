/* test for support webp-background in css */
document.addEventListener("DOMContentLoaded", function () {
  testWebP(document.body);
});

function testWebP(elem) {
  const webP = new Image();
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

  webP.onload = webP.onerror = function () {
    if (webP.height === 2) {
      elem.classList.add("webp");
    }
  };
}
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
  menulinks.forEach(menuLink => {
    menuLink.addEventListener("click", function (e) {
      const scrollTo = e.target.dataset.scrollto;
      const scrollToBlock = document.querySelector(scrollTo);
      const scrollToBlockValue = scrollToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;

      if (scrollTo && scrollToBlock) {
        e.preventDefault();
        window.scrollTo({
          top: scrollToBlockValue,
          behavior: "smooth"
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
/* intro slider */


const slides = document.querySelectorAll(".intro__slide");
const previousControl = document.querySelector(".intro__controls--prev");
const nextControl = document.querySelector(".intro__controls--next");
const introSlider = document.querySelector(".intro__slider");
let currentSlide = 0;
let slideInterval = setInterval(autoPlaySlide, 10000);
let playing = true;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = "intro__slide";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "intro__slide--active";
}

function autoPlaySlide() {
  slides[currentSlide].className = "intro__slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "intro__slide--active";
}

function pauseSlideshow() {
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  playing = true;
  slideInterval = setInterval(nextSlide, 10000);
}

if (playing) {
  pauseSlideshow();
} else {
  playSlideshow();
}

nextControl.addEventListener("click", nextSlide);
previousControl.addEventListener("click", previousSlide);
introSlider.addEventListener("mouseover", pauseSlideshow);
introSlider.addEventListener("mouseout", playSlideshow);
/* products - get products data from json */

const productsList = document.querySelector(".products__list");
const productsDataFile = "../json/products.json";
const productsTitles = document.querySelectorAll(".products__title");
const discountList = document.querySelector(".discount__list");

if (productsTitles.length > 0) {
  productsTitles.forEach(productsTitle => {
    productsTitle.addEventListener("click", e => {
      e.preventDefault();
      productsTitles.forEach(elem => elem.classList.remove("btn--active"));
      productsTitle.classList.add("btn--active");
      productsList.textContent = "";
      getProductsData(productsTitle);
    });
  });
}

async function getProductsData(btn) {
  if (!btn.classList.contains("btn--disabled")) {
    btn.classList.add("btn--disabled");
    let response = await fetch(productsDataFile, {
      method: "GET"
    });

    if (response.ok) {
      let result = await response.json();
      loadProductsData(result, btn);
      btn.classList.remove("btn--disabled");
    } else {
      alert("Error HTTP: " + response.status);
    }
  }
}

let products = [];
let productsLength = 0;
let startItem = 0;
let showPerClick = 3;

function loadProductsData(data, btn) {
  productsLength = data.length;

  for (let i = 0; i < data.length; i++) {
    let product = `<li data-prodid="${data[i].id}" class="products__item">
    	<img class="products__img" src="${data[i].img}" alt="${data[i].title}" width="260" height="300" />
    	<h3 class="products__subtitle">${data[i].title}</h3>
    	<p class="products__text">${data[i].text}</p>
    	<p class="products__price">
    		<span class="products__price--new">${data[i].newprice}</span>`;

    if (data[i].oldprice) {
      product += `<span class="products__price--old">${data[i].oldprice}</span>`;
    }

    product += `        	
    	</p>
    </li>`;
    products.push(product);

    if (btn.classList.contains("products__title")) {
      if (btn.firstChild.nodeValue == data[i].group) {
        productsList.insertAdjacentHTML("beforeend", product);
      }
    }

    if (btn.classList.contains("discount__title")) {
      if (data[i].discount == "yes") {
        discountList.insertAdjacentHTML("beforeend", product);
      }
    }
  }

  return products;
}
/* offer - video */


const offerVideoButton = document.querySelector(".offer__video-button");
const offerVideoPoster = document.querySelector(".offer__video-poster");
const offerVideo = document.querySelector(".offer__video");
offerVideoButton.addEventListener("click", () => {
  offerVideoPoster.style.display = "none";
  offerVideo.play();
});
/* popup 404 for nonexistent links */

const nonexistentLinks = document.querySelectorAll('a[href="#"]');
const popupBg = document.querySelector(".popup404");
const popup = document.querySelector(".popup404__body");
const closePopupButton = document.querySelector(".popup404__close");
nonexistentLinks.forEach(nonexistentLink => {
  nonexistentLink.addEventListener("click", e => {
    e.preventDefault();
    document.body.classList.add("locked");
    popupBg.classList.add("popup404--active");
    popup.classList.add("popup404__body--active");
  });
});
closePopupButton.addEventListener("click", () => {
  document.body.classList.remove("locked");
  popupBg.classList.remove("popup404--active");
  popup.classList.remove("popup404__body--active");
});
document.addEventListener("click", e => {
  if (e.target === popupBg) {
    document.body.classList.remove("locked");
    popupBg.classList.remove("popup404--active");
    popup.classList.remove("popup404__body--active");
  }
});
document.addEventListener('DOMContentLoaded', function () {
  autoPlaySlide();
  /* preload list of products - featured */

  const productsTitleFeatured = document.querySelector('.products__title--featured');
  productsTitleFeatured.classList.add("btn--active");
  getProductsData(productsTitleFeatured);
  /* preload list of products - discount */

  const discountTitle = document.querySelector('.discount__title');
  getProductsData(discountTitle);
});