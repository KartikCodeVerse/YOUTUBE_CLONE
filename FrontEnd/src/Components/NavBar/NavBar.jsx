import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "./logo.png";
import SearchBar from "../SearchBar/SearchBar";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import { gapi } from "gapi-script";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Action/Action";
import Auth from "../Auth/Auth";

const NavBar = ({ setCreateEditChanel, toggleDrawer }) => {
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.currentUserReducer);
  const [AuthBtn, setAuthBtn] = useState(false);
  const HandleOnAuth = () => {
    setAuthBtn(!AuthBtn);
  };
  // const CurrentUser = {
  //   result: {
  //     email: "kingboy123@gmail.com",
  //     joinedon: "2222-07-15T09:57:25:23.489z",
  //   },
  // };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "1005193584217-64bjb77jej7arop8uic7gs3cnl2c45fm.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    const Email = response?.profileObj.email;
    dispatch(login({ email: Email }));
  };

  const onFailure = (response) => {
    console.log("Failed", response);
  };
  return (
    <>
      <div className="navbar">
        <div className="nav_logo">
          <div className="burger" onClick={() => toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
          </div>

          <Link to={"/"} className="logo">
            <img src={logo} alt="" />
            <p className="logo_title">
              Youtube <sup>IN</sup>
            </p>
          </Link>
        </div>
        <SearchBar />
        <RiVideoAddLine size={22} className="vid_icon" />
        <div className="apps_box">
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
        </div>
        <IoMdNotificationsOutline size={22} className="vid_icon" />
        <div className="Auth_count_Navbar">
          {CurrentUser ? (
            <>
              <div className="Chenel_logo_App" onClick={HandleOnAuth}>
                <p className="fstChhar_logo_App">
                  {CurrentUser?.result.name ? (
                    <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                  ) : (
                    <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <GoogleLogin
                clientId=""
                onSuccess={onSuccess}
                onFailure={onFailure}
                render={(renderProps) => (
                  <p onClick={renderProps.onClick} className="Auth_Btn">
                    <BiUserCircle size={22} />
                    <b>Sign in</b>
                  </p>
                )}
              />
            </>
          )}
        </div>
      </div>

      {AuthBtn && (
        <Auth
          setCreateEditChanel={setCreateEditChanel}
          CreateEditChanel
          setAuthBtn={setAuthBtn}
          User={CurrentUser}
        />
      )}
    </>
  );
};

export default NavBar;
