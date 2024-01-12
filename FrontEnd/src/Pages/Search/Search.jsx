import React from "react";
import { useSelector } from "react-redux";
import "./Search.css";
import LeftSideBar from "../../Components/SideBar/LeftSideBar.jsx";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid.jsx";
import { useParams } from "react-router-dom";

const Search = () => {
  const { searchQuery } = useParams();
  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) =>
      q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())
    )
    .reverse();

  return (
    <div className="home_page">
      <LeftSideBar />
      <div className="home2_page">
        <h2 style={{color:"white"}}>Search Result for {searchQuery}...</h2>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
};

export default Search;
