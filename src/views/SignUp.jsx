import React, { useState } from "react";
import HyperLink from "../assets/Icons/HyperLink";
import Verify from "../assets/Icons/Verify";
import LoadingLogo from "../assets/Img/LoadingLogo.png";

const SignUp = () => {
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
          <h3>SignUp to LeoWorldSwap</h3>
          <div className="sign-in-last">
            <p>Already a member?</p>
            <div className="sign-in-link">
              <HyperLink />
              <a href="#">Login here</a>
            </div>
          </div>
          <div className="signup-grid">
            <input type="text" placeholder="FIRST NAME" />
            <input type="text" placeholder="LAST NAME" />
            <input type="text" placeholder="EMAIL" />
            <input type="password" placeholder="PASSWORD" />
          </div>

          {/* <button className="btn-outlined-gray">
            Click to verify <Verify />
          </button> */}
          <button className="btn-filled-yellow ">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
