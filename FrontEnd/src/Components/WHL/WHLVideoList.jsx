import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

const WHLVideoList = ({ page, CurrentUser, videoList }) => {
  return (
    <>
      {CurrentUser ? (
        <>
          {videoList?.data
            ?.filter((q) => q?.viewer === CurrentUser)
            .reverse()
            .map((m, i) => {
              return <ShowVideoList id={m?.videoId} key={m._id} />;
            })}
        </>
      ) : (
        <h2 style={{ color: "white", marginTop: "20px" }}>
          Plz Login To Watch Your {page}
        </h2>
      )}
    </>
  );
};

export default WHLVideoList;
