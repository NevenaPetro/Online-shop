import React from "react";
import { useContext } from "react";
import { applicationContext } from "../../context/AplicationContext";

function ProductPage() {
    const { activeProduct } = useContext(applicationContext);
  return (
    <div>
      {activeProduct.images && (
        <img
          src={activeProduct.images[0]}
          alt="product-image"
          className="product-image"
        />
      )}
      <p>{activeProduct.name}</p>
      <p>Price: {activeProduct.price}$</p>
    </div>
  );
}

export default ProductPage;
