import React from "react";
import "./SearchList.css";
import { FaSearch } from "react-icons/fa";

const SearchList = ({ list, value }) => {
  return (
    <div className="search_list">
      {list.map((m) => {
        return (
          <p className="title_item" key={m} onClick={(e) => value(m)}>
            <FaSearch />
            {m}
          </p>
        );
      })}
    </div>
  );
};

export default SearchList;
