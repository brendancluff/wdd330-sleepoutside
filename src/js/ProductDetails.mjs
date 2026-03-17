import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // get the product details from the data source
    this.product = await this.dataSource.findProductById(this.productId);

    // render the product details into the page
    this.renderProductDetails();

    // add click listener to Add to Cart button
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }

  addToCart() {
    const cartItems = getLocalStorage("so-cart") || [];
    cartItems.push(this.product);
    setLocalStorage("so-cart", cartItems);
  }

  renderProductDetails() {
    document.title = `Sleep Outside | ${this.product.Name}`;

    document.querySelector(".product-detail").innerHTML = `
      <h3>${this.product.Brand.Name}</h3>
      <h2 class="divider">${this.product.NameWithoutBrand}</h2>

      <img
        class="divider"
        src="${this.product.Image}"
        alt="${this.product.NameWithoutBrand}"
      />

      <p class="product-card__price">$${this.product.FinalPrice}</p>

      <p class="product__color">${this.product.Colors[0].ColorName}</p>

      <p class="product__description">${this.product.DescriptionHtmlSimple}</p>

      <div class="product-detail__add">
        <button id="addToCart">Add to Cart</button>
      </div>
    `;
  }
}