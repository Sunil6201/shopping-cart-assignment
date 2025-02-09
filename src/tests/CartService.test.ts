import { CartService } from "../../src/services/CartService";

describe("CartService", () => {
  let cartService: CartService;

  beforeEach(() => {
    cartService = new CartService();
  });

  test("should add items to cart and calculate totals", async () => {
    await cartService.addProduct("cornflakes", 1);  // Price: 4.99
    await cartService.addProduct("cornflakes", 1);  // Price: 4.99
    await cartService.addProduct("weetabix", 1);    // Price: 7.29

    const cartState = cartService.getCartState();

    const expectedSubtotal = (4.99 * 2) + 7.29; // 4.99 + 4.99 + 7.29 = 17.27
    const expectedTax = expectedSubtotal * 0.125; // 17.27 * 0.125 = 2.16
    const expectedTotal = expectedSubtotal + expectedTax; // 17.27 + 2.16 = 19.43

    expect(cartState.subtotal).toBe(expectedSubtotal.toFixed(2)); // "17.27"
    expect(cartState.tax).toBe(expectedTax.toFixed(2));           // "2.16"
    expect(cartState.total).toBe(expectedTotal.toFixed(2));       // "19.43"
  });
});
