import { CartService } from "../services/CartService";

export class CartController {
  private cartService = new CartService();

  async addItem(productName: string, quantity: number) {
    await this.cartService.addProduct(productName, quantity);
    console.log(`Added ${quantity} x ${productName} to cart.`);
  }

  viewCart() {
    console.log("Cart Summary:", this.cartService.getCartState());
  }
}
