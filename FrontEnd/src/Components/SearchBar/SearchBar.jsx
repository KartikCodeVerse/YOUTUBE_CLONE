import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import SearchList from "./SearchList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [searchList, setsearchList] = useState(true);
  const TittleArray = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) =>
      q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())
    )
    .map((m) => m?.videoTitle);
  // const TittleArray = [
  //   "video1",
  //   "animal",
  //   "video2",
  //   "movie",
  //   "hindi",
  //   "movie",
  // ].filter((q) => q.toUpperCase().includes(searchQuery.toUpperCase()));
  return (
    <div className="search_bar">
      <div className="search_container">
        <input
          className="search_box"
          value={searchQuery}
          onChange={(e) => {
            setsearchQuery(e.target.value);
          }}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${searchQuery}`}>
          <FaSearch
            className="search_icon"
            onClick={(e) => setsearchList(false)}
          />
        </Link>

        <BsMicFill className="mic_icon" />
        {searchQuery && searchList && (
          <SearchList list={TittleArray} value={setsearchQuery} />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
