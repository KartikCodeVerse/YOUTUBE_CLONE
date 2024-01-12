import { combineReducers } from "redux";
import authReducer from "./Auth";
import currentUserReducer from "./CurrentUser";
import chanelReducers from "./Chanel";
import videoReducer from "./Video";
import likedVideoReducer from "./LikedVideo";
import watchLaterReducer from "./watchLater";
import HistoryReducer from "./HistoryReducer";
import commentReducer from "./Comment";

export default combineReducers({
  authReducer,
  currentUserReducer,
  chanelReducers,
  videoReducer,
  likedVideoReducer,
  watchLaterReducer,
  HistoryReducer,
  commentReducer,
});
