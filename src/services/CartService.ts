import { ProductRepository } from "../repositories/ProductRepository";

export interface CartItem {
  productName: string;
  quantity: number;
  price: number;
}

export class CartService {
  private cart: CartItem[] = [];
  private productRepository = new ProductRepository();

  async addProduct(productName: string, quantity: number) {
    const price = await this.productRepository.getProductPrice(productName);
    const existingItem = this.cart.find(item => item.productName === productName);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ productName, quantity, price });
    }
  }

  getCartState() {
    const subtotal = this.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const tax = subtotal * 0.125; // 12.5% tax
    const total = subtotal + tax;

    return {
      items: this.cart,
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    };
  }
}
