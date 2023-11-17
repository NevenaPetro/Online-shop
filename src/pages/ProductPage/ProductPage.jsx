import React from "react";
import { useContext } from "react";
import { applicationContext } from "../../context/AplicationContext";
import "../ProductPage/productpage.css";

function ProductPage() {
  const { activeProduct } = useContext(applicationContext);
  return (
    <div className="product-details-wrapper">
      <div className="product-details-images">
        {activeProduct.images &&
          activeProduct.images.map((e) => (
            <img key={e.id} src={activeProduct.images[0]} alt="product-image" />
          ))}
      </div>
      <div className="product-details-info">
        <p className="product-name">{activeProduct.name}</p>
        <p className="product-descr">{activeProduct.description}</p>
        <p className="product-feattures">{activeProduct.features}</p>
        <p className="product-price">Price: {activeProduct.price}$</p>
        <p className="product-price">Price: {activeProduct.price}$</p>
        <p className="product-price">Price: {activeProduct.category}$</p>

      </div>
    </div>
  );
}

export default ProductPage;
