import * as api from "../API/API.js";

export const addtowatchLater = (watchLaterData) => async (dispatch) => {
  try {
    const { data } = await api.addtowatchLater(watchLaterData);
    dispatch({ type: "POST_WATCHLATER", data });
    dispatch(getAllwatchLater());
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getAllwatchLater = () => async (dispatch) => {
  try {
    const { data } = await api.getAllwatchLater();
    dispatch({ type: "FETCH_ALL_WATCHLATER_VIDEOS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletewatchLater = (watchLaterData) => async (dispatch) => {
  try {
    const { videoId, viewer } = watchLaterData;
    await api.deletewatchLater(videoId, viewer);
    dispatch(getAllwatchLater());
  } catch (error) {
    console.log(error);
  }
};
