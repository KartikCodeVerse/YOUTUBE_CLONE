import React from "react";
import "./Shorts.css";
import LeftSideBar from "../../Components/SideBar/LeftSideBar.jsx";

const Shorts = () => {
  return (
    <div className="shorts_page">
      <LeftSideBar />
      <div className="shorts_page">Shorts</div>
    </div>
  );
};

export default Shorts;
