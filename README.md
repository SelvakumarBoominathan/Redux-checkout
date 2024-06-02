# React Redux
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

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SelvakumarBoominathan/Redux-checkout.git
   ```

## Usage

Open your web browser and navigate to `http://localhost:5174` to view the cart page. You can increase the quantity of each product, delete products, and see the total price updated accordingly.

## Components

### `App.js`

The main component that renders the cart page. It combines `Checkout` and `Total_Price` components.

### `Checkout.jsx`

A component that displays the list of products in the cart, including:

- Product name
- Product model
- Product price
- Product image
- Product rating (Star)
- Input to change quantity (up to 10)
- Button to delete the product
- Product total price per quantity

### `Total_Price.jsx`

A component that displays the total price of all products in the cart.

### Actions

- `updateTotalCost(newTotal)`: Sets the total cost of all products.
- `deleteProduct(productID`: Removes the deleted product from the cart.

### Reducers

The reducers handle updating the state based on the dispatched actions.

### Store Configuration

The Redux store is configured in `store.js` using `redux`.

---
