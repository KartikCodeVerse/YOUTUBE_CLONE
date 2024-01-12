import React from "react";
import "./Subscriptions.css";
import LeftSideBar from "../../Components/SideBar/LeftSideBar.jsx";

const Subscriptions = () => {
  return (
    <div className="subscriptions_page">
      <LeftSideBar />
      <div className="subscriptions_page">LikedVideo</div>
    </div>
  );
};

export default Subscriptions;
