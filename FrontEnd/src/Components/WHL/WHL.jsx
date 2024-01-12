import React from "react";
import "./WHL.css";
import WHLVideoList from "./WHLVideoList";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "../../Action/History";
const WHL = ({ page, videoList }) => {
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const dispatch = useDispatch();

  const handleClearHistory = () => {
    if (CurrentUser) {
      dispatch(
        clearHistory({
          userId: CurrentUser?.result._id,
        })
      );
    }
  };
  return (
    <div className="whl_page">
      <div className="whl_cont">
        <div className="box whl_left">
          <b>Your {page} Show Here</b>
          {page === "History" && (
            <div className="clear_btn" onClick={() => handleClearHistory()}>
              Clear History
            </div>
          )}
        </div>
        <div className="whl_right">
          <h1>{page}</h1>
          <div className="whl_list">
            <WHLVideoList
              page={page}
              CurrentUser={CurrentUser?.result._id}
              videoList={videoList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WHL;
