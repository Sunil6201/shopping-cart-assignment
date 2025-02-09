# Shopping Cart Assignment 🛒

## 📌 Description
This is a simple shopping cart implementation in TypeScript that allows users to:
- Add products to the cart.
- Fetch product prices from an external API.
- Calculate subtotal, tax (12.5%), and total payable.
- View the cart summary.

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/shopping-cart-assignment.git
cd shopping-cart-assignment
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Mock Price API
To serve product prices, run:
```sh
npm run serve-products
```

### 4️⃣ Execute the Shopping Cart Logic
```sh
npx ts-node src/index.ts
```

### 5️⃣ Run Unit Tests
```sh
npx jest
```

### 🛠 What This Tests
- Adding products to the cart.
- Fetching prices from the API.
- Cart calculations (Subtotal, Tax, and Total).
- Correct quantities are maintained.

---

## 📜 Assumptions & Trade-offs
- The shopping cart is **stateless** and resets on each execution.
- Prices are fetched from an external API dynamically.
- Rounding rules follow JavaScript's built-in behavior.

## 📧 Submission Instructions
1. Push your final code to the **public GitHub repository**.
2. Send the repository link via email.
3. Ensure all tests pass before submission.

✅ **Done!** 🎉 Your assignment is complete.

