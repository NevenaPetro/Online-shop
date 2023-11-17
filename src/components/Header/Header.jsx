import React from "react";
import "../Header/header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h2 className="logo">Online shop</h2>
      </Link>
      <Link to="/cart" className="cart-icon">
        <ShoppingBasketIcon />
      </Link>
    </div>
  );
}

export default Header;
