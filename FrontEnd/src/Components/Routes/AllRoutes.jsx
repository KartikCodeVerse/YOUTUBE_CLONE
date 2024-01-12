import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Library from "../../Pages/Library/Library";
import Explore from "../../Pages/Explore/Explore";
import Shorts from "../../Pages/Shorts/Shorts";
import LikedVideo from "../../Pages/LikedVideo/LikedVideo";
import WatchLater from "../../Pages/WatchLater/WatchLater";
import WatchHistory from "../../Pages/WatchHistory/WatchHistory";
import Subscriptions from "../../Pages/Subscriptions/Subscriptions";
import YourVideo from "../../Pages/YourVideo/YourVideo";
import VideoPage from "../../Pages/Video/VideoPage";
import Chanel from "../../Pages/Chanel/Chanel";
import Search from "../../Pages/Search/Search";
const AllRoutes = ({ setVidUploadpage, setCreateEditChanelbtn }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/liked" element={<LikedVideo />} />
        <Route path="/yourvideo" element={<YourVideo />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<WatchHistory />} />
        <Route path="/video/:vid" element={<VideoPage />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route
          path="/chanel/:Cid"
          element={
            <Chanel
              setVidUploadpage={setVidUploadpage}
              setCreateEditChanelbtn={setCreateEditChanelbtn}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
