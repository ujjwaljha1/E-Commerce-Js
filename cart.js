import { createProductCard } from "./createProductCard.js";

const productContainer = document.getElementById("products");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  productContainer.innerHTML = '<p>Your cart is empty.</p>';
} else {
  createProductCard(cart, productContainer, () => true, 'cart');
}

productContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-button")) {
    const productId = event.target.dataset.productId;

    cart = cart.filter(({ _id }) => _id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));

    const card = event.target.closest('.card');
    card.parentNode.removeChild(card);

    if (cart.length === 0) {
      productContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
  }
});
