const commentReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "POST_COMMENT":
      return { ...state };
    case "FETCH_ALL_COMMENT":
      return { ...state, data: action.payload };
    case "EDIT_COMMENT":
      return { ...state };
    default:
      return state;
  }
};

export default commentReducer;
