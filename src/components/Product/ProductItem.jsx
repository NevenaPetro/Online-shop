import React from "react";
import { useContext } from "react";
import { applicationContext } from "../../context/AplicationContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DoneIcon from '@mui/icons-material/Done';
import "../Product/productItem.css";

function ProductItem({ item }) {
  const { setActiveProduct, addToCart } = useContext(applicationContext);
  let { productURL } = useParams();
  return (
    <div         className="product-item-wrapper"
    >
      <div
        className="product-item"
        onClick={() => setActiveProduct(item)}
      >
        <Link to={`/product/${item.url}`}>
          <div >
            <div>
              {item.images && (
                <img
                  src={item.images[0]}
                  alt="product-image"
                  className="product-image"
                />
              )}
            </div>
            <p className="product-name">{item.name}</p>
            <p className="product-descr">{item.description}</p>
            <p className="product-price">{item.price}$</p>
          </div>
        </Link>
      </div>
      <div className="add-to-cart-btn" onClick={() => addToCart(item)}>
        <AddShoppingCartIcon />
      </div>
    </div>
  );
}

export default ProductItem;
