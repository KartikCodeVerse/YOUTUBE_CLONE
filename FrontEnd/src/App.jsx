import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import AllRoutes from "./Components/Routes/AllRoutes";
import DrawerSideBar from "./Components/SideBar/DrawerSideBar.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import CreateEditChanel from "./Pages/Chanel/CreateEditChanel.jsx";
import VideoUpload from "./Pages/VideoUpload/VideoUpload.jsx";
import { fetchAllChanel } from "./Action/ChanelUser.js";
import { useDispatch } from "react-redux";

import { getAllVideo } from "./Action/Video.js";
import { getAllLikedVideo } from "./Action/likedVideo.js";
import { getAllwatchLater } from "./Action/WatchLater.js";
import { getAllHistory } from "./Action/History.js";
import { getAllComment } from "./Action/Comment.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAllLikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
    dispatch(getAllComment());
  }, [dispatch]);

  const [CreateEditChanelbtn, setCreateEditChanelbtn] = useState(false);
  const [toggleDrawerSidebar, setTogglerDrawerSidebar] = useState({
    display: "none",
  });

  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setTogglerDrawerSidebar({
        display: "flex",
      });
    } else {
      setTogglerDrawerSidebar({
        display: "none",
      });
    }
  };

  const [vidUploadpage, setVidUploadpage] = useState(false);
  return (
    <Router>
      {vidUploadpage && <VideoUpload setVidUploadpage={setVidUploadpage} />}

      {CreateEditChanelbtn && (
        <CreateEditChanel setCreateEditChanelbtn={setCreateEditChanelbtn} />
      )}

      <NavBar
        setCreateEditChanel={setCreateEditChanelbtn}
        toggleDrawer={toggleDrawer}
      />
      <DrawerSideBar
        toggleDrawerSidebar={toggleDrawerSidebar}
        toggleDrawer={toggleDrawer}
      />
      <AllRoutes
        setVidUploadpage={setVidUploadpage}
        setCreateEditChanelbtn={setCreateEditChanelbtn}
      />
    </Router>
  );
}

export default App;
