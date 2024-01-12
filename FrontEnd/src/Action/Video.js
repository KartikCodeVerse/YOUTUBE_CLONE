import * as api from "../API/API.js";

export const uploadVideo = (videoData) => async (dispatch) => {
  try {
    const { fileData, fileOptions } = videoData;
    const { data } = await api.uploadVideo(fileData, fileOptions);
    dispatch({ type: "POST_VIDEO", data });
    dispatch(getAllVideo());
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getAllVideo = () => async (dispatch) => {
  try {
    const { data } = await api.getVideos();
    dispatch({ type: "FETCH_ALL_VIDEOS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likeVideo = (likeData) => async (dispatch) => {
  try {
    const { id, like } = likeData;
    const { data } = await api.likeVideo(id, like);
    dispatch({ type: "POST_LIKE", payload: data });
    dispatch(getAllVideo());
  } catch (error) {
    console.error("Error liking video:", error);
  }
};

export const viewVideo = (viewData) => async (dispatch) => {
  try {
    const { id } = viewData;
    const { data } = await api.viewVideo(id);
    dispatch({ type: "POST_VIEWS", payload: data });
    dispatch(getAllVideo());
  } catch (error) {
    console.error("Error viewing video:", error);
  }
};
