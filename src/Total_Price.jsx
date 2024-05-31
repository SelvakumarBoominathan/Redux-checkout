import React from "react";
import "./Style.css";
import { useSelector } from "react-redux";

const Total_Price = () => {
  const Total_value = useSelector((state) => state.calculatedvalue);

  return (
    <>
      <div className="grand_container_totalcost">
        <div className="Total_div">
          <div>
            <h2>subtotal : </h2>
          </div>
          <div>
            <h2>$ {Total_value}</h2>
          </div>
        </div>

        <div className="Total_div">
          <div>
            <h2>Total : </h2>
          </div>
          <div>
            <h2 style={{ color: "red", fontWeight: 800 }}> $ {Total_value}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Total_Price;
