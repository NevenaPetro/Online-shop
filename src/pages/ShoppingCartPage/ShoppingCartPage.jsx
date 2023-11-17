import React from "react";
import { useContext } from "react";
import { applicationContext } from "../../context/AplicationContext";
import ProductItem from "../../components/Product/ProductItem";


function ShoppingCartPage() {
  const { cartList } = useContext(applicationContext);
  return (
    <div>
      <h2>This is your Shopping CART</h2>
      {cartList &&
          cartList.map((e) => (
            <div key={e.id}>
              <ProductItem item={e}></ProductItem>
            </div>
          ))}
    </div>
  );
}

export default ShoppingCartPage;
