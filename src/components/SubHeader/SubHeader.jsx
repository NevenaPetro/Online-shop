import React from "react";
import { useContext } from "react";
import { applicationContext } from "../../context/AplicationContext";

import "../SubHeader/subHeader.css";

function SubHeader() {
  const { handleSort, handleFilter, categoryList } =
    useContext(applicationContext);

  return (
    <div className="sub-header-wrapper">
      <div className="sort">
        <label htmlFor="sort">Sort : </label>
        <select name="sort" defaultValue="" onChange={handleSort}>
          <option disabled></option>
          <option value="ascending">ascending price</option>
          <option value="descending">descending price</option>
        </select>
      </div>
      <div className="filter">
        <label htmlFor="filter">Filter : </label>

        <select name="filter" defaultValue="" onChange={handleFilter}>
          <option disabled></option>
          {categoryList &&
            categoryList.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default SubHeader;
