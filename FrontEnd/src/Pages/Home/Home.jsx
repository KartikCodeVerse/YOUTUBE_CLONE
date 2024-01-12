import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import LeftSideBar from "../../Components/SideBar/LeftSideBar.jsx";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid.jsx";

const Home = () => {
  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q)
    .reverse();

  //   {
  //     _id: 1,
  //     video_src: vid1,
  //     Chennel: "62bafe6752a6c30685f",
  //     title: "video 1",
  //     uploder: "abc",
  //     description: "description of video 1",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid2,
  //     Chennel: "62bafe6752a6c30685f",
  //     title: "video 1",
  //     uploder: "def",
  //     description: "description of video 2",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid3,
  //     Chennel: "62bafe6752a6c30685f",
  //     title: "video 1",
  //     uploder: "ghi",
  //     description: "description of video 3",
  //   },
  // ];
  const NavList = [
    "All",
    "Mixes",
    "Music",
    "Live",
    "News",
    "Movies",
    "Action",
    "Tamil",
    "Hindi",
    "Science",
    "SRK",
  ];
  return (
    <div className="home_page">
      <LeftSideBar />
      <div className="home2_page">
        <div className="navigation_home">
          {NavList.map((m) => {
            return (
              <p key={m} className="btn_nav_home">
                {m}
              </p>
            );
          })}
        </div>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  );
};

export default Home;
