import React, { useState } from "react";
import "./CreateEditChanel.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Action/Action";
import { updateChanelData } from "../../Action/ChanelUser";

const CreateEditChanel = ({ setCreateEditChanelbtn }) => {
  // const CurrentUser = {
  //   result: {
  //     email: "kingboy123@gmail.com",
  //     joinedon: "2222-07-15T09:57:25:23.489z",
  //   },
  // };

  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!name) {
      alert("Plz Enter Name!");
    } else if (!desc) {
      alert("Plz Enter Discription");
    } else {
      dispatch(
        updateChanelData(CurrentUser?.result._id, {
          name: name,
          desc: desc,
        })
      );
      setCreateEditChanelbtn(false);
      setTimeout(() => {
        dispatch(login({ email: CurrentUser?.result.email }));
      }, 5000);
    }
  };
  return (
    <div className="createeditchanel">
      <input
        type="submit"
        name="text"
        value={"X"}
        className="ibtn_x"
        onClick={() => setCreateEditChanelbtn(false)}
      />
      <div className="createeditchanel2">
        <h1>
          {CurrentUser?.result.desc ? <>Edit</> : <>Create</>} Your Chanel
        </h1>
        <input
          type="text"
          className="ibox"
          placeholder="Enter Your Chanel Name"
          name="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          type="text"
          rows={15}
          placeholder="Enter Chanel Description"
          className="ibox"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
          value="Submit"
          className="ibtn"
        />
      </div>
    </div>
  );
};

export default CreateEditChanel;
