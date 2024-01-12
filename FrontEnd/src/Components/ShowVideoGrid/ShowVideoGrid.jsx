import React from "react";
import ShowVideo from "../ShowVideo/ShowVideo";
import "./ShowVideoGrid.css";

const ShowVideoGrid = ({ vids }) => {
  return (
    <div className="showvideo_grid">
      {vids?.map((vi, i) => {
        return (
          <div key={i} className="video_box">
            <ShowVideo vid={vi} />
          </div>
        );
      })}
    </div>
  );
};

export default ShowVideoGrid;
