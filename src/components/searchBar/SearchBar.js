import React from "react";
import "./styles.css";

const SearchBar = () => {
  return (
    <>
      <input
        className="search"
        type="text"
        name="search"
        placeholder="Search news..."
      />
    </>
  );
};

export default SearchBar;
