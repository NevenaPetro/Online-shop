import React from "react";
import { useContext } from "react";
import { applicationContext } from "../../context/AplicationContext";

import ProductItem from "../../components/Product/ProductItem";
import "../HomePage/homepage.css";

function HomePage() {
  const { productsList } = useContext(applicationContext);

  return (
    <div>
      <h3>HomePage</h3>
      <div className="products">
        {productsList &&
          productsList.map((e) => (
            <div key={e.id}>
              <ProductItem item={e}></ProductItem>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomePage;
