import React from "react";
import "./Auth.css";
import { GoogleLogout } from "react-google-login";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../Action/CurrentUser";
import { Link } from "react-router-dom";

const Auth = ({ User, setAuthBtn, setCreateEditChanel }) => {

  const CLIENT_ID = `1005193584217-64bjb77jej7arop8uic7gs3cnl2c45fm.apps.googleusercontent.com`;
  const dispatch = useDispatch();
  const onLogoutSuccess = () => {
    dispatch(setCurrentUser(null));
    alert("Log Out Successfully");
  };

  return (
    <div className="auth" onClick={() => setAuthBtn(false)}>
      <div className="auth_container">
        <div className="user_details">
          <div className="Chenel_logo_App">
            <p className="fstChhar_logo_App">
              {User?.result.name ? (
                <>{User?.result.name.charAt(0).toUpperCase()}</>
              ) : (
                <>{User?.result.email.charAt(0).toUpperCase()}</>
              )}
            </p>
          </div>
          <div className="email_auth">{User?.result.email}</div>
        </div>
        <div className="btns_auth">
          {User?.result.name ? (
            <>
              <Link to={`/chanel/${User?.result._id}`}>
                <input type="submit" className="btn_auth" value="Your Chanel" />
              </Link>
            </>
          ) : (
            <>
              <input
                type="submit"
                className="btn_auth"
                value="Create Your Chanel"
                onClick={() => setCreateEditChanel(true)}
              />
            </>
          )}

          <div>
            <GoogleLogout
              clientId={CLIENT_ID}
              onLogoutSuccess={onLogoutSuccess}
              render={(renderProps) => (
                <div onClick={renderProps.onClick} className="btn_auth">
                  <BiLogOut />
                  Log Out
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
