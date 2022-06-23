import React, { useState } from "react";
import HyperLink from "../assets/Icons/HyperLink";
import Verify from "../assets/Icons/Verify";
import LoadingLogo from "../assets/Img/LoadingLogo.png";

const SignIn = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const changeToLightTheme = () => {
    setIsDarkTheme(false);
    console.log("Changed to LIGHT THEME");
  };
  const changeToDarkTheme = () => {
    setIsDarkTheme(true);
    console.log("Changed to DARK THEME");
  };
  return (
    <div className={`app ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <div className="sign-inpage">
        <div className="sign-in-content">
          <img src={LoadingLogo} alt="LoadingLogo" />
          <h3>Sign in to LeoWorldSwap</h3>
          <div className="sign-in-flabel">
            <input type="text" placeholder="EMAIL" />
            <input type="password" placeholder="PASSWORD" />
          </div>
          <div className="sign-in-link">
            <HyperLink />
            <a href="#">Forgot Password?</a>
          </div>
          <button className="btn-outlined-gray">
            Click to verify <Verify />
          </button>
          <button className="btn-filled-yellow ">Sign in</button>
          <div className="sign-in-last">
            <p>Not a member?</p>
            <div className="sign-in-link">
              <HyperLink />
              <a href="#">Sign up now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
