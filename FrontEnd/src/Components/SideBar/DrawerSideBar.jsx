import React from "react";
import { Link } from "react-router-dom";
import "./LeftSideBar.css";
import shorts from "./shorts.png";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { AiFillPlaySquare } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
const DrawerSideBar = (props) => {
  return (
    <div className="drawer_side" style={props.toggleDrawerSidebar}>
      <div className="drawer2_side">
        <div className="drawer_leftside">
          <Link to={"/"} className="icon_side_bar ">
            <p>
              <AiOutlineHome
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar">Home</span>
            </p>
          </Link>
          <Link to={"/explore"} className="icon_side_bar ">
            <p>
              <MdOutlineExplore
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar">Explore</span>
            </p>
          </Link>
          <Link to={"/shorts"} className="icon_side_bar ">
            <p>
              <img
                src={shorts}
                width={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar">Shorts</span>
            </p>
          </Link>
          <Link to={"/subscriptions"} className="icon_side_bar">
            <p>
              <MdOutlineSubscriptions
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar">Subscriptions</span>
            </p>
          </Link>
        </div>
        <div className="librarybtn_drawerleftsidebar">
          <Link to={"/library"} className="icon_side_bar">
            <p>
              <MdOutlineLibraryAdd
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar">Library</span>
            </p>
          </Link>
          <Link to={"/history"} className="icon_side_bar">
            <p>
              <FaHistory
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar">History</span>
            </p>
          </Link>
          <Link to={"/yourvideo"} className="icon_side_bar">
            <p>
              <AiFillPlaySquare
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar">Your Videos</span>
            </p>
          </Link>
          <Link to={"/watchlater"} className="icon_side_bar">
            <p>
              <MdOutlineWatchLater
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar">Watch Later</span>
            </p>
          </Link>
          <Link to={"/liked"} className="icon_side_bar">
            <p>
              <AiFillLike
                size={22}
                className={"icon_sidebar"}
                style={{ margin: "auto 0.7rem" }}
              />
              <span className="text_sidebar">Liked Video</span>
            </p>
          </Link>
        </div>
        <div className="sub_lsdbar">
          <h3>Your Subscriptions</h3>
          <div className="chenel_lsdbar">
            <p>C</p>
            <div>Chenel</div>
          </div>
          <div className="chenel_lsdbar">
            <p>C</p>
            <div>Chenel</div>
          </div>
          <div className="chenel_lsdbar">
            <p>C</p>
            <div>Chenel</div>
          </div>
          <div className="chenel_lsdbar">
            <p>C</p>
            <div>Chenel</div>
          </div>
          <div className="chenel_lsdbar">
            <p>C</p>
            <div>Chenel</div>
          </div>
        </div>
      </div>
      <div className="drawer3_side" onClick={() => props.toggleDrawer()}></div>
    </div>
  );
};

export default DrawerSideBar;
