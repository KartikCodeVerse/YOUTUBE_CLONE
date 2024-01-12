import React from "react";
import "./LeftSideBar.css";
import shorts from "./shorts.png";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";
const LeftSideBar = () => {
  return (
    <div className="left_side_bar">
      <Link to={"/"} className="icon_side_bar">
        <AiOutlineHome size={22} className="icon_sidebar" />
        <div className="text_sidebar">Home</div>
      </Link>
      <Link to={"/explore"} className="icon_side_bar">
        <MdOutlineExplore size={22} className="icon_sidebar" />
        <div className="text_sidebar">Explore</div>
      </Link>
      <Link to={"/shorts"} className="icon_side_bar">
        <img src={shorts} width={22} className="icon_sidebar" />
        <div className="text_sidebar">shorts</div>
      </Link>
      <Link to={"/subscriptions"} className="icon_side_bar">
        <MdOutlineSubscriptions size={22} className="icon_sidebar" />
        <div className="text_sidebar" style={{ fontSize: "14px" }}>
          Subscriptions
        </div>
      </Link>
      <Link to={"/library"} className="icon_side_bar">
        <MdOutlineLibraryAdd size={22} className="icon_sidebar" />
        <div className="text_sidebar">Library</div>
      </Link>
    </div>
  );
};

export default LeftSideBar;
