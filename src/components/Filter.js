import React from "react";

const Filter = ({ filterValueSelected }) => {
  const onFilterValueChange = (event) => {
    filterValueSelected(event.target.value);
  };

  return (
    <div className="filter-box">
      <select onChange={onFilterValueChange}>
        <option value="Africa">Africa</option>
        <option value="america">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
