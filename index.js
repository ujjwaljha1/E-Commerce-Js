import { Products } from "./db/product.js";

const productContainer = document.getElementById("products");

for (let product of Products) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card", "shadow");
  cardContainer.innerHTML = `
    <img src="${product.img}" alt="${product.alt}" />
    <div class="info">
      <h5>${product.name}</h5>
      <p>${product.brand}</p>
      <div class="pricing">
        <p class="old-price">Old Price: ${product.oldPrice}</p>
        <p class="new-price">New Price: ${product.newPrice}</p>
        <p class="discount">Discount: ${product.discount}</p>
      </div>
      <div class="buy">
        <button class="buy-button">Buy Now</button>
        <span class="material-icons">shopping_bag</span>
      </div>
    </div>
  `;
  productContainer.appendChild(cardContainer);
}
