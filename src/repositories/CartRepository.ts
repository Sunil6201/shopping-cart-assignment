import { ProductRepository } from "./ProductRepository";

export class CartRepository {
    private cart: { [key: string]: number } = {}; // Stores productName => quantity
    private productRepo: ProductRepository;

    constructor() {
        this.productRepo = new ProductRepository();
    }

    addProduct(productName: string, quantity: number) {
        if (this.cart[productName]) {
            this.cart[productName] += quantity;
        } else {
            this.cart[productName] = quantity;
        }
    }

    getCart(): { [key: string]: number } {
        return this.cart;
    }
}
