import { findProductInCart } from './utils/findproductincart.js';

export const createProductCard = (Products, productContainer, findProductInCart, currentPage) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  for (let product of Products) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card", "shadow");

    let buttonHTML = '';
    if (currentPage === 'home') {
      buttonHTML = `
        <button class="buy-button" data-product-id="${product._id}">
          ${findProductInCart(cart, product._id) ? 'Go To Cart' : 'Add To Cart'}
        </button>
      `;
    } else if (currentPage === 'cart') {
      buttonHTML = `
        <button class="remove-button" data-product-id="${product._id}">
          Remove
        </button>
      `;
    }

    cardContainer.innerHTML = `
      <img src="${product.img}" alt="${product.alt}" />
      <div class="info">
        <h5>${product.name}</h5>
        <p>${product.brand}</p>
        <div class="pricing">
          <p>Rs.</p>
          <p class="old-price">${product.oldPrice}</p>
          <p class="new-price">${product.newPrice}</p>
          <p class="discount">(${product.discount}%)</p>
        </div>
        <div class="buy">
          ${buttonHTML}
          <span class="material-icons">shopping_bag</span>
        </div>
      </div>
    `;

    productContainer.appendChild(cardContainer);
  }
};
