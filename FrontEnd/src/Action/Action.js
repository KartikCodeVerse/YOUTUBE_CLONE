import * as api from "../API/API";
import { setCurrentUser } from "./CurrentUser";
export const login = (authData) => async (dispatch) => {
  try {
    const { data } = await api.login(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  } catch (error) {
    if (error.response) {
      // The request was made, but the server responded with an error status code
      // You can access the status code and response data here
      console.error("Request failed with status code", error.response.status);
      console.error("Response data:", error.response.data);

      // Handle the error or dispatch an action to update the Redux store with an error state
      // For example, dispatch({ type: "AUTH_ERROR", error: error.response.data });
    } else if (error.request) {
      // The request was made, but no response was received
      console.error("No response received");
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Error setting up the request", error.message);
    }

    // Alert the user with a more generic message
    alert("An error occurred. Please try again later.");

    // Optionally, rethrow the error for further handling or logging
    throw error;
  }
};
