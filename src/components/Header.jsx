import React, { useState } from "react";
import BellIcon from "../assets/Icons/BellIcon";
import ChevronDownIcon from "../assets/Icons/ChevronDownIcon";
import MoonIcon from "../assets/Icons/MoonIcon";
import SearchIcon from "../assets/Icons/SearchIcon";
import SunIcon from "../assets/Icons/SunIcon";
import UserProfileImg from "../assets/Img/user-profile.png";
import HeaderLogo from "../assets/Img/header-logo.png";
import LoadingLogo from "../assets/Img/LoadingLogo.png";
const Header = (props) => {
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
    <header>
      <div className="header-content">
        <div className="header-left">
          <div className="header-left-search-box">
            <SearchIcon />
            <input type="text" placeholder="Search Coins ..." />
          </div>
        </div>
        <div className="header-right">
          <div className="notification-theme-container">
            <div className="theme-toggle-box">
              {isDarkTheme ? (
                <div className="theme-icon-box active-theme">
                  <MoonIcon />
                </div>
              ) : (
                <div className="theme-icon-box" onClick={changeToDarkTheme}>
                  <MoonIcon />
                </div>
              )}
              {isDarkTheme ? (
                <div className="theme-icon-box" onClick={changeToLightTheme}>
                  <SunIcon />
                </div>
              ) : (
                <div className="theme-icon-box active-theme">
                  <SunIcon />
                </div>
              )}
            </div>
            <div className="spacer"></div>
            <div className="search-icon-box">
              <SearchIcon />
            </div>
            <div className="notification-box">
              <BellIcon />
              <div></div>
            </div>
          </div>
          <div className="user-dropdown">
            <div className="user-dropdown-box">
              <img src={UserProfileImg} alt="UserProfileImg" />
              <div className="user-dropdown-box-text">
                <h6>Jackob Gerrald</h6>
                <p>#32648723</p>
              </div>
            </div>
            <ChevronDownIcon color="var(--fff-000)" />
          </div>
        </div>
      </div>
      <div className="header-mob">
        <div className="header-mob-left">
          <div className="lws-logo">
            <img src={LoadingLogo} alt="Logo" />
            <span>LeoWorldSwap</span>
          </div>
        </div>
        <div className="header-mob-right">
          <div className="theme-toggle-box">
            <div className="theme-icon-box active-theme">
              <MoonIcon />
            </div>
          </div>
          <div className="search-icon-box">
            <SearchIcon />
          </div>
          <div className="notification-box">
            <BellIcon />
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
