import React from "react";
import { useContext, useState } from "react";
import { applicationContext } from "../../context/AplicationContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import "../ProductPage/productpage.css";

function ProductPage() {
  const { activeProduct, addToCart, removeFromCart, isInCart } =
    useContext(applicationContext);

  return (
    <div className="product-details-wrapper">
      <div className="product-details-images">
        {activeProduct.images &&
          activeProduct.images.map((e) => (
            <img key={e} src={e} alt="product-image" />
          ))}
      </div>
      <div className="product-details-info">
        <p className="product-name">{activeProduct.name}</p>
        <div className="product-cat">
          <span>{activeProduct.category}</span>
          <span> {`>`}</span>
          <span> {activeProduct.subcategory}</span>
        </div>
        <p className="product-descr">{activeProduct.description}</p>

        <p className="product-feattures">{activeProduct.features}</p>

        <div className="buy-product">
          <p className="product-price">Price: {activeProduct.price}$</p>
          {!isInCart(activeProduct) && (
            <div
              className="add-to-cart-btn-page"
              onClick={() => {
                addToCart(activeProduct);
              }}
            >
              <AddShoppingCartIcon />{" "}
            </div>
          )}
          {isInCart(activeProduct) && (
            <div
              className="remove-from-cart-btn-page"
              onClick={() => {
                removeFromCart(activeProduct);
              }}
            >
              <RemoveShoppingCartIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
