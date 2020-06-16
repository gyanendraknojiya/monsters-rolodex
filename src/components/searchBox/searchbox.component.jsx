import React from "react";
import "./searchbox.style.css";

function SearchBox(props) {
  return (
    <input
      className="search-box"
      type="search"
      onChange={props.handleChanges}
      placeholder="Search Monsters"
    />
  );
}

export default SearchBox;
