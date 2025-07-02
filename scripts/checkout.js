import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadCart, loadCartFetch } from "../data/cart.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";

async function loadPage() {
  try {
    // throw 'error1';

    await Promise.all([loadProductsFetch(), loadCartFetch()]);
  } catch (error) {
    console.log("Unexpected error. Please try again later.");
  }
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();
