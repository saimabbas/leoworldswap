import React, { useState } from "react";
import LoadingLogo from "../assets/Img/LoadingLogo.png";

const Loading = () => {
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
      <div className="loading-page">
        <div className="loading-logo-box">
          <img src={LoadingLogo} alt="LoadingLogo" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
