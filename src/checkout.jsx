import React, { useState, useEffect } from "react";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux"; 
import { updateTotalCost, deleteProduct } from "./actions";

export default function Checkout() {
  const dispatch = useDispatch();

  //used useSelector to make the products to be rendered from redux.
  const Products = useSelector((state) => state.cartProducts);

  const [quantities, setQuantities] = useState(Products.map(() => 1));

  //Calculate initial cost
  const calculateInitialTotalCost = () => {
    let initialTotal = 0;
    Products.forEach((product, index) => {
      initialTotal += product.price * quantities[index];
    });
    return initialTotal;
  };

  const [totalCost, setTotalCost] = useState(calculateInitialTotalCost);

  useEffect(() => {
    // Calculate initial total cost when Products or quantities change
    let newTotal = 0;
    Products.forEach((product, index) => {
      newTotal += product.price * quantities[index];
    });

    setTotalCost(newTotal);

    //dispatching value from here
    dispatch(updateTotalCost(newTotal));
  }, [Products, quantities, dispatch]);

  // //dispatching value from here
  // dispatch(updateTotalCost(totalCost));

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
        <div className="Cart_Section" key={Product.id}>
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
