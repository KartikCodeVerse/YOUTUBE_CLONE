import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Comments.css";
import DisplayComments from "./DisplayComments";
import { postComment } from "../../Action/Comment";

const Comments = ({ videoId }) => {
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const commentList = useSelector((state) => state.commentReducer);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (CurrentUser) {
      if (!commentText) {
        alert("Plz Type Your Comments!");
      } else {
        dispatch(
          postComment({
            videoId: videoId,
            userId: CurrentUser?.result._id,
            commentBody: commentText,
            userCommented: CurrentUser?.result.name,
          })
        );

        setCommentText("");
      }
    } else {
      alert("Plz login to comment");
    }
  };

  // const commentList = [
  //   {
  //     _id: 1,
  //     commentBody: "Vulgur",
  //     userCommented: "xy",
  //   },
  //   {
  //     _id: 2,
  //     commentBody: "Cool",
  //     userCommented: "ab",
  //   },
  //   {
  //     _id: 3,
  //     commentBody: "Dance",
  //     userCommented: "ds",
  //   },
  //   {
  //     _id: 4,
  //     commentBody: "5 Star",
  //     userCommented: "sa",
  //   },
  // ];
  return (
    <>
      <form className="comment_form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="add comment..."
          onChange={(e) => setCommentText(e.target.value)}
          value={commentText}
          className="comment_box"
        />
        <input type="submit" value={"add"} className="add_btn" />
      </form>
      <div className="display_comments">
        {CurrentUser &&
          commentList?.data
            ?.filter((q) => videoId === q?.videoId)
            .reverse()
            .map((m, i) => {
              return (
                <DisplayComments
                  key={i}
                  commentBody={m.commentBody}
                  userCommented={m.userCommented}
                  cId={m._id}
                  userId={m.userId}
                  commentOn={m.commentOn}
                />
              );
            })}
      </div>
    </>
  );
};

export default Comments;
