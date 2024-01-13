import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:3000/" });
const API = axios.create({
  baseURL: "https://youtubeclone-mern.onrender.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const login = (authData) => API.post("/user/login", authData);
export const updateChanelData = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);
export const fetchAllChanel = () => API.get("/user/getallchanels");

export const uploadVideo = (fileData, fileOptions) =>
  API.post("/video/uploadvideo", fileData, fileOptions);
export const getVideos = () => API.get("/video/getvideos");
export const likeVideo = (id, like) => API.patch(`/video/like/${id}`, { like });
export const viewVideo = (id) => API.post(`/video/view/${id}`);

export const addToLikedVideo = (likedVideoData) =>
  API.post("/video/likevideo", likedVideoData);
export const getAllLikedVideo = () => API.get("/video/getalllikevideo");
export const deleteLikedVideo = (videoId, viewer) =>
  API.delete(`/video/deletelikedvideo/${videoId}/${viewer}`);

export const addtowatchLater = (watchLaterData) =>
  API.post("/video/watchlater", watchLaterData);
export const getAllwatchLater = () => API.get("/video/getallwatchlater");
export const deletewatchLater = (videoId, viewer) =>
  API.delete(`/video/deletewatchlater/${videoId}/${viewer}`);

export const addtoHistory = (historyData) =>
  API.post("/video/history", historyData);
export const getAllHistory = () => API.get("/video/getallhistory");
export const clearHistory = (userId) =>
  API.delete(`/video/clearhistory/${userId}`);

export const postComment = (commentData) =>
  API.post("/comment/post", commentData);
export const deleteComment = (id) => API.delete(`/comment/delete/${id}`);
export const editComment = (id, commentBody) =>
  API.patch(`/comment/edit/${id}`, { commentBody });
export const getAllComment = () => API.get("/comment/get");
