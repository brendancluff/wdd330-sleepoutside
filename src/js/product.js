import {
  getParam,
  loadHeaderFooter,
  getLocalStorage,
  setLocalStorage,
} from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

const productId = getParam("product");
const category = getParam("category");

const dataSource = new ProductData();
const product = new ProductDetails(productId, category, dataSource);

product.init();

function addProductToCart(productItem) {
  let cartItems = getLocalStorage("so-cart") || [];
  cartItems.push(productItem);
  setLocalStorage("so-cart", cartItems);
}

async function addToCartHandler(e) {
  const productItem = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(productItem);
}

document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);