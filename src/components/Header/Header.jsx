import React from "react";

import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "../Header/header.css";

function Header() {
  
  return (
    <div className="header">
      <Link to="/" >
        <h2 className="logo">Online shop</h2>
      </Link>
      <Link to="/cart" className="cart-icon" >
        <ShoppingBasketIcon />
      </Link>
    </div>
  );
}

export default Header;
