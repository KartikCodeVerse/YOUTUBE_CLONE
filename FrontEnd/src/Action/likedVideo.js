import * as api from "../API/API.js";

export const addToLikedVideo = (likedVideoData) => async (dispatch) => {
  try {
    const { data } = await api.addToLikedVideo(likedVideoData);
    dispatch({ type: "POST_LIKEDVIDEO", data });
    dispatch(getAllLikedVideo());
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getAllLikedVideo = () => async (dispatch) => {
  try {
    const { data } = await api.getAllLikedVideo();
    dispatch({ type: "FETCH_ALL_LikedVIDEOS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteLikedVideo = (likevideoData) => async (dispatch) => {
  try {
    const { videoId, viewer } = likevideoData;
    await api.deleteLikedVideo(videoId, viewer);
    dispatch(getAllLikedVideo());
  } catch (error) {
    console.log(error);
  }
};
