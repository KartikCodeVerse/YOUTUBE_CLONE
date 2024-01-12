import * as api from "../API/API.js";

export const postComment = (commentData) => async (dispatch) => {
  try {
    const { data } = await api.postComment(commentData);
    dispatch({ type: "POST_COMMENT", payload: data });
    dispatch(getAllComment());
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const getAllComment = () => async (dispatch) => {
  try {
    const { data } = await api.getAllComment();
    dispatch({ type: "FETCH_ALL_COMMENT", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const editComment = (commentData) => async (dispatch) => {
  try {
    const { id, commentBody } = commentData;
    const { data } = await api.editComment(id, commentBody);
    dispatch({ type: "EDIT_COMMENT", payload: data });
    dispatch(getAllComment());
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = (id) => async (dispatch) => {
  try {
    await api.deleteComment(id);
    dispatch(getAllComment());
  } catch (error) {
    console.log(error);
  }
};
