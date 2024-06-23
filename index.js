import { Products } from "./db/product.js";
import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./utils/findproductincart.js";

const productContainer = document.getElementById("products");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const currentPage = window.location.pathname.includes('cart.html') ? 'cart' : 'home';

productContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("buy-button")) {
    const productId = event.target.dataset.productId;

    if (!findProductInCart(cart, productId)) {
      const productToAddToCart = Products.filter(({ _id }) => _id === productId);

      if (productToAddToCart.length > 0) {
        cart = [...cart, ...productToAddToCart];
        localStorage.setItem("cart", JSON.stringify(cart));

        event.target.textContent = "Go To Cart";
        event.target.addEventListener("click", () => {
          window.location.href = "cart.html";
        });
      }
    } else {
      window.location.href = "cart.html";
    }
  } else if (event.target.classList.contains("remove-button")) {
    const productId = event.target.dataset.productId;

    cart = cart.filter(({ _id }) => _id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));

    const card = event.target.closest('.card');
    card.parentNode.removeChild(card);

    if (cart.length === 0 && currentPage === 'cart') {
      productContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
  }
});

createProductCard(Products, productContainer, findProductInCart, currentPage);
