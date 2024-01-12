import React from "react";
import { useSelector } from "react-redux";
import "./DecribeChanel.css";
import { FaEdit, FaUpload } from "react-icons/fa";

const DecribeChanel = ({ setVidUploadpage, setCreateEditChanelbtn, Cid }) => {
  const chanels = useSelector((state) => state?.chanelReducers);
  const currentChanel = chanels.filter((c) => c._id === Cid)[0];
  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  return (
    <div className="decribeChanel">
      <div className="chanel_logo_chanel">
        <b>{currentChanel?.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_chanel">
        <b>{currentChanel?.name}</b>
        <p>{currentChanel?.desc}</p>
      </div>
      {CurrentUser?.result._id === currentChanel?._id && (
        <>
          <p className="editbtn" onClick={() => setCreateEditChanelbtn(true)}>
            <FaEdit />
            <b>Edit Chanel</b>
          </p>
          <p className="uploadbtn" onClick={() => setVidUploadpage(true)}>
            <FaUpload />
            <b>Upload Video</b>
          </p>
        </>
      )}
    </div>
  );
};

export default DecribeChanel;
