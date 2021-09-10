/* products */
const productsMoreBtn = document.querySelector(".products__btn.btn--more");
const productsAllBtn = document.querySelector(".products__btn.btn--all");
const productsTitles = document.querySelectorAll(".products__title");
const productsItems = document.querySelectorAll(".products__item");
const productsList = document.querySelector(".products__list");
const productsDataFile = "../json/products.json";

productsTitles.forEach((productsTitle) => {
  productsTitle.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("productsTitle clicked");
    console.log(e.target.firstChild.nodeValue);
    // let width = productsTitle.getBoundingClientRect().width;
    // console.log(width);
  });
});

productsMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getProductsData(productsMoreBtn);
});

productsAllBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getProductsData(productsAllBtn);
  productsMoreBtn.remove();
});

async function getProductsData(btn) {
  if (!btn.classList.contains("btn--disabled")) {
    btn.classList.add("btn--disabled");
    let response = await fetch(productsDataFile, {
      method: "GET",
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
    products.push(`<li data-prodid="${data[i].id}" class="products__item">
    	<img class="products__img" src="${data[i].img}" alt="${data[i].title}" width="260" height="300" />
    	<h3 class="products__subtitle">${data[i].title}</h3>
    	<p class="products__text">${data[i].text}</p>
    	<p class="products__price">
    		<span class="products__price--new">${data[i].newprice}</span>
    		<span class="products__price--old">${data[i].oldprice}</span>
    	</p>
    </li>`);
  }

  if (btn.classList.contains("btn--all")) {
    productsList.insertAdjacentHTML("beforeend", products);
    btn.remove();
  }

  if (btn.classList.contains("btn--more")) {
    products.slice(startItem, showPerClick).map((product) => productsList.insertAdjacentHTML("beforeend", product));

    if (showPerClick == productsLength) {
      btn.remove();
    } else {
      if (startItem < productsLength) {
        if (productsLength - showPerClick < showPerClick) {
          startItem = showPerClick;
          showPerClick = productsLength;
        } else {
          startItem = showPerClick;
          showPerClick += startItem;
        }
      }
    }
  }

  return products;
}
