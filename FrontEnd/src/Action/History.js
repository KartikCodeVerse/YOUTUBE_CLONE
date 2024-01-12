import * as api from "../API/API.js";

export const addtoHistory = (historyData) => async (dispatch) => {
  try {
    const { data } = await api.addtoHistory(historyData);
    dispatch({ type: "POST_HISTORY", data });
    dispatch(getAllHistory());
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getAllHistory = () => async (dispatch) => {
  try {
    const { data } = await api.getAllHistory();
    dispatch({ type: "FETCH_ALL_HISTORY_VIDEOS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const clearHistory = (historyData) => async (dispatch) => {
  try {
    const { userId } = historyData;
    await api.clearHistory(userId);
    dispatch(getAllHistory());
  } catch (error) {
    console.log(error);
  }
};
