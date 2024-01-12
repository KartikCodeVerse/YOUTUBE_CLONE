import React from "react";
import LeftSideBar from "../../Components/SideBar/LeftSideBar.jsx";
import ShowVideoGrid from "../../Components/ShowVideoGrid/ShowVideoGrid.jsx";
import DecribeChanel from "./DecribeChanel.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Chanel = ({ setVidUploadpage, setCreateEditChanelbtn }) => {
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const { Cid } = useParams();
  const vids = useSelector((state) => state.videoReducer)
    ?.data?.filter((q) => q?.videoChanel === Cid)
    .reverse();
  return (
    <div className="home_page">
      <LeftSideBar />
      <div className="home2_page">
        {CurrentUser ? (
          <>
            <DecribeChanel
              Cid={Cid}
              setVidUploadpage={setVidUploadpage}
              setCreateEditChanelbtn={setCreateEditChanelbtn}
            />
            <ShowVideoGrid vids={vids} />
          </>
        ) : (
          <>
            <h1 style={{ color: "white", margin: "20px" }}>
              Plz Login To See Your Chanel...
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Chanel;
