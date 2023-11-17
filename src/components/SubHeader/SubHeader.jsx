import React from "react";
import { useContext } from "react";
import { applicationContext } from "../../context/AplicationContext";

import "../SubHeader/subHeader.css";

function SubHeader() {
  const { productsList, handleSort } = useContext(applicationContext);
  return (
    <div className="sub-header-wrapper">
      <div className="sort">
        <label htmlFor="sort">Sort : </label>
        <select name="sort" type="select" defaultValue=""  onChange={handleSort}>
          <option disabled ></option>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
        
      </div>
    </div>
  );
}

export default SubHeader;
