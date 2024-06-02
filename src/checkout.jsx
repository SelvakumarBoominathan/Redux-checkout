import React, { useState, useEffect } from "react";
import "./Style.css";
import { useDispatch } from "react-redux";
import { updateTotalCost, deleteProduct } from "./actions";

export default function Checkout({ Products }) {
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(Products.map(() => 1));
  const [totalCost, setTotalCost] = useState(() => {
    let initialTotal = 0;
    Products.forEach((product, index) => {
      initialTotal += product.price * quantities[index];
    });
    return initialTotal;
  });

  useEffect(() => {
    // Calculate initial total cost when Products or quantities change
    let initialTotal = 0;
    Products.forEach((product, index) => {
      initialTotal += product.price * quantities[index];
    });
    // setTotal(totalCost);
    setTotalCost(initialTotal);
  }, [Products, quantities]);

  //dispatching value from here
  dispatch(updateTotalCost(totalCost));

  //event handler function to render selected quantity of items
  const handleQuantityChange = (index, event) => {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(event.target.value);
    setQuantities(newQuantities);
  };

  //function to calculate total cost of each product
  const calculateTotal = (index) => {
    return quantities[index] * Products[index].price;
  };

  //function to perform handle delete

  const handleDelete = (productID) => {
    dispatch(deleteProduct(productID));
  };

  return (
    <>
      {/*using map function to map all products from the list of array object */}
      {Products.map((Product, index) => (
        <div className="Cart_Section" key={index}>
          <div className="Img_container">
            <img src={Product.images} alt={Product.title}></img>
          </div>
          <div className="productDetails_container">
            <h2>{Product.brand}</h2>
            <h4>{Product.title}</h4>
            <p>{Product.starrating}</p>
            <h2>$ {Product.price}</h2>
            <button
              className="Del-btn"
              onClick={() => {
                handleDelete(Product.id);
              }}
            >
              Delete
            </button>
          </div>
          <div className="price_details">
            <div className="dropdown_div">
              <select
                className="form-control"
                onChange={(event) => handleQuantityChange(index, event)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <h2>$ {calculateTotal(index)}</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
