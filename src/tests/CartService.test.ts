import { CartService } from "../../src/services/CartService";

describe("CartService", () => {
  let cartService: CartService;

  beforeEach(() => {
    cartService = new CartService();
  });

  test("should add items to cart and calculate totals", async () => {
    await cartService.addProduct("cornflakes", 1); 
    await cartService.addProduct("cornflakes", 1); 
    await cartService.addProduct("weetabix", 1);  

    const cartState = cartService.getCartState();

    const expectedSubtotal = (4.99 * 2) + 7.29; 
    const expectedTax = expectedSubtotal * 0.125; 
    const expectedTotal = expectedSubtotal + expectedTax; 
    expect(cartState.subtotal).toBe(expectedSubtotal.toFixed(2)); 
    expect(cartState.tax).toBe(expectedTax.toFixed(2));          
    expect(cartState.total).toBe(expectedTotal.toFixed(2));       
  });
});
