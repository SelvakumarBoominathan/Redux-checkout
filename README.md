# React Redux

## Cart items managing page using React + Redux to enable state management and centralizing state.

It is a simple cart page to increase product quantity upto 10 for each. Also to calculate the overall price for all the products in the cart. there is a functionality to delete the product aswell and the total price will also recalculated per the available items in the cart.

# Simple Cart Page

This project is a simple shopping cart page implemented using React and Redux. It allows users to:

- Increase the quantity of each product up to a maximum of 10.
- Calculate the overall price for all products in the cart.
- Delete products from the cart.
- Recalculate the total price based on the available items in the cart.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Redux Store](#redux-store)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SelvakumarBoominathan/Redux-checkout.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

## Usage

Open your web browser and navigate to `http://localhost:3000` to view the cart page. You can increase the quantity of each product, delete products, and see the total price updated accordingly.

## Components

### `App.js`

The main component that renders the cart page. It combines `Cart` and `TotalPrice` components.

### `Cart.js`

A component that displays the list of products in the cart, including:

- Product name
- Product price
- Input to change quantity (up to 10)
- Button to delete the product

### `TotalPrice.js`

A component that displays the total price of all products in the cart.

## Redux Store

### State Structure

The Redux state has the following structure:

```javascript
{
  app: {
    products: [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      // ...
    ],
    quantities: [1, 2, 1, ...], // Corresponding quantities for each product
    totalCost: 0 // Total cost of all products in the cart
  }
}
```

### Actions

- `setTotalCost(totalCost)`: Sets the total cost of all products.
- `setQuantities(quantities)`: Sets the quantities of products.
- `setProducts(products)`: Sets the list of products.

### Reducers

The reducers handle updating the state based on the dispatched actions.

### Store Configuration

The Redux store is configured in `store.js` using `@reduxjs/toolkit`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
