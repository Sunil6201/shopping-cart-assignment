export class ProductRepository {
    private API_URL = "http://localhost:3001/products";
  
    async getProductPrice(productName: string): Promise<number> {
      try {
        const response = await fetch(`${this.API_URL}/${productName}`);
        if (!response.ok) throw new Error("Failed to fetch product price");
        const product = await response.json();
        return product.price;
      } catch (error) {
        console.error("Error fetching product price:", error);
        throw error;
      }
    }
  }
  