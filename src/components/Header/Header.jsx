import React from "react";
import { useContext } from "react";
import { applicationContext } from "../../context/AplicationContext";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "../Header/header.css";

function Header() {
  const { handleSearch } = useContext(applicationContext);

  return (
    <div className="header">
      <Link to="/">
        <h2 className="logo">Online shop</h2>
      </Link>
      <div className="searct-cart-wrapper">
        <div className="search">
          <input type="search" className="search" onChange={handleSearch} placeholder="search..."/>
        </div>
        <Link to="/cart" className="cart-icon">
          <ShoppingBasketIcon />
        </Link>
      </div>
    </div>
  );
}

export default Header;
