import React from "react";
import LoadingLogo from "../assets/Img/LoadingLogo.png";

const Loading = () => {
  return (
    <div className="app">
      <div className="loading-page">
        <div className="loading-logo-box">
          <img src={LoadingLogo} alt="LoadingLogo" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
