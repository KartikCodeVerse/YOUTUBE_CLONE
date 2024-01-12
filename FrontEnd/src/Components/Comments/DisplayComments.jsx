import React, { useState } from "react";
import "./Comments.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../../Action/Comment";
import moment from "moment";

const DisplayComments = ({
  cId,
  commentBody,
  userId,
  commentOn,
  userCommented,
}) => {
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const [Edit, SetEdit] = useState(false);
  const [CommentBdy, SetCommentBdy] = useState("");
  const [cmtId, setcmtId] = useState("");

  const handleEdit = (comId, comBdy) => {
    SetEdit(!Edit);
    setcmtId(comId);
    SetCommentBdy(comBdy);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!CommentBdy) {
      alert("Type Your Comments");
    } else {
      dispatch(
        editComment({
          id: cmtId,
          commentBody: CommentBdy,
        })
      );
      SetCommentBdy("");
    }

    SetEdit(false);
  };

  const handleDel = (id) => {
    dispatch(deleteComment(id));
  };
  return (
    <>
      {Edit ? (
        <>
          <form className="comment_form" onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="Edit comment..."
              value={CommentBdy}
              onChange={(e) => SetCommentBdy(e.target.value)}
              className="comment_box"
            />
            <input type="submit" value="Change" className="add_btn" />
          </form>
        </>
      ) : (
        <>
          <p className="comment_body">{commentBody}</p>
        </>
      )}

      <p className="user_commented">
        - {userCommented} commented {moment(commentOn).fromNow()}
      </p>
      {CurrentUser?.result._id === userId && (
        <p className="edit_display">
          <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
          <i onClick={() => handleDel(cId)}>Delete</i>
        </p>
      )}
    </>
  );
};

export default DisplayComments;
