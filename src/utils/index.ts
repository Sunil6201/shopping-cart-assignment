import { CartController } from "../controllers/CartController";

const cartController = new CartController();

async function run() {
  await cartController.addItem("cornflakes", 1);
  await cartController.addItem("cornflakes", 1);
  await cartController.addItem("weetabix", 1);
  
  cartController.viewCart();
}

run();
