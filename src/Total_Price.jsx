import React, { useContext } from 'react';
import './Style.css';


const Total_Price = () => {


  return (

    <>
      <div className="grand_container_totalcost">
              <div className="Total_div">
                <div><h2>subtotal : </h2></div>
                <div><h2>$ total</h2></div>
              </div>

              <div className="Total_div">
                <div><h2>Total : </h2></div>
                <div><h2 style={{color : "red", fontWeight: 800}} > $ Total</h2></div>
              </div>
      </div>
    </>

  )
}

export default Total_Price;





