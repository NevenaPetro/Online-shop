import React from "react";
import { useContext } from "react";
import { applicationContext } from "../../context/AplicationContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Product/productItem.css";

function ProductItem({ item }) {
  const { setActiveProduct } = useContext(applicationContext);
  let { productURL } = useParams();
  return (
    <>
      <div className="product" onClick={() => setActiveProduct(item)}>
        <Link to={`/product/${item.url}`}>
          <div>
            <div>
              {item.images && (
                <img
                  src={item.images[0]}
                  alt="product-image"
                  className="product-image"
                />
              )}
            </div>
            <p>{item.name}</p>
            <p>Price: {item.price}$</p>
          </div>
        </Link>
      </div>
      <button onClick={()=>{}}>Add to cart</button>
    </>
  );
}

export default ProductItem;
