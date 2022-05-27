import React from "react";
import BellIcon from "../assets/Icons/BellIcon";
import ChevronDownIcon from "../assets/Icons/ChevronDownIcon";
import MoonIcon from "../assets/Icons/MoonIcon";
import SearchIcon from "../assets/Icons/SearchIcon";
import SunIcon from "../assets/Icons/SunIcon";
import UserProfileImg from "../assets/Img/user-profile.png";
const Header = () => {
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
              <div className="theme-icon-box active-theme">
                <MoonIcon />
              </div>
              <div className="theme-icon-box">
                <SunIcon />
              </div>
            </div>
            <div className="spacer"></div>
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
            <ChevronDownIcon color="#fff" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
