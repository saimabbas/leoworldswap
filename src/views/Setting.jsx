import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { MdClear } from "react-icons/md";
import Google from "../assets/Icons/Google";
import SMS from "../assets/Icons/SMS";
import Email from "../assets/Icons/Email";
import InfoImg from "../assets/Img/info.png";

import BellIcon from "../assets/Icons/BellIcon";
import ChevronDownIcon from "../assets/Icons/ChevronDownIcon";
import MoonIcon from "../assets/Icons/MoonIcon";
import SearchIcon from "../assets/Icons/SearchIcon";
import SunIcon from "../assets/Icons/SunIcon";
import UserProfileImg from "../assets/Img/user-profile.png";
import HeaderLogo from "../assets/Img/header-logo.png";
import HeaderLogoDark from "../assets/Img/header-logo-dark.png";
import { Form } from "react-bootstrap";
const Setting = () => {
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
      <div className="dashboard-container">
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
                    <div
                      className="theme-icon-box"
                      onClick={changeToLightTheme}
                    >
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
              <img className="dt-element" src={HeaderLogo} alt="HeaderLogo" />
              <img
                className="lt-element"
                src={HeaderLogoDark}
                alt="HeaderLogo"
              />
            </div>
            <div className="header-mob-right">
              <div className="theme-toggle-box">
                {isDarkTheme ? (
                  <div
                    className="theme-icon-box active-theme"
                    onClick={changeToLightTheme}
                  >
                    <MoonIcon />
                  </div>
                ) : (
                  <div
                    className="theme-icon-box active-theme"
                    onClick={changeToDarkTheme}
                  >
                    <SunIcon />
                  </div>
                )}
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
        <Nav />
        <div className="dashboard-content-container">
          <div className="setting-page lws-rounded-box">
            <div className="setting-header">
              <h2>Account Security</h2>
            </div>
            <div className="setting-cross">
              <div className="setting-cross-inner">
                <div className="setting-cross-box">
                  <MdClear />
                </div>
                <h6>2 FA</h6>
              </div>
              <div className="setting-cross-inner">
                <div className="setting-cross-box">
                  <MdClear />
                </div>
                <h6>Identity Verification</h6>
              </div>
              <div className="setting-cross-inner">
                <div className="setting-cross-box">
                  <MdClear />
                </div>
                <h6>Enable Anti-phising Code</h6>
              </div>
              <div className="setting-cross-inner">
                <div className="setting-cross-box">
                  <MdClear />
                </div>
                <h6>Turn-on Withdrawal Whitelist</h6>
              </div>
            </div>
          </div>
          <div className="setting-main-box">
            <div className="setting-left">
              <div className="sleft-fa lws-rounded-box">
                <h5>2FA</h5>
                <div className="google-authentication">
                  <div className="goog-auth-left">
                    <div className="goog-icon">
                      <Google color="#fff" />
                    </div>
                    <div className="goog-para">
                      <h6>Google Authentication</h6>
                      <p>Used for withdrawals and security modifications</p>
                    </div>
                  </div>
                  <div className="goog-auth-right">
                    <button className="btn-outlined-yellow">Enable</button>
                  </div>
                </div>
                <div className="google-authentication">
                  <div className="goog-auth-left">
                    <div className="goog-icon">
                      <SMS />
                    </div>
                    <div className="goog-para">
                      <h6>SMS Authentication</h6>
                      <p>Used for withdrawals and security modifications</p>
                    </div>
                  </div>
                  <div className="goog-auth-right">
                    <button className="btn-outlined-yellow">Enable</button>
                  </div>
                </div>
                <div className="ga-mob google-authentication">
                  <div className="goog-auth-left">
                    <div className="goog-icon">
                      <Email />
                    </div>
                    <div className="goog-para">
                      <h6>Email Verification</h6>
                      <p>Used for withdrawals and security modifications</p>
                    </div>
                  </div>
                  <div className="goog-auth-right">
                    <button className="btn-outlined-gray">Verify</button>
                  </div>
                </div>
              </div>
              <div className="sleft-dm lws-rounded-box">
                <h5>Device Management</h5>
                <button className="btn-outlined-gray">Manage</button>
              </div>
              <div className="sleft-aa lws-rounded-box">
                <div className="sl-aa-para">
                  <h5>Account Activity</h5>
                  <p>Last signed in</p>
                  <h6>
                    Suspicius account activity? <span>Deactive Account</span>
                  </h6>
                </div>
                <button className="btn-outlined-gray">More</button>
              </div>
            </div>
            <div className="setting-right">
              <div className="sright-ILA lws-rounded-box">
                <div className="s-right-Iden-2">
                  <h5>Identify Verification</h5>
                  <button className="btn-outlined-gray">Verify</button>
                </div>
                <div className="s-right-Iden">
                  <h5>Login Password</h5>
                  <button className="btn-outlined-gray">Reset</button>
                </div>
                <div className="s-right-Iden-1">
                  <div className="s-right-para">
                    <h5>Address Management</h5>
                    <p>
                      Address Management allows you to save and write memos for
                      each of your withdrawal addresses.
                    </p>
                    <div className="s-right-off">
                      <span>Witelist Off</span>
                      <img src={InfoImg} alt="InfoImg" />
                      <Form.Check type="switch" id="custom-switch" />
                    </div>
                  </div>
                  <button className="btn-outlined-gray">Manage</button>
                </div>
              </div>
              <div className="sright-apc lws-rounded-box">
                <div className="s-right-Iden-3">
                  <div className="s-right-para">
                    <h5>Anti-phising Code</h5>
                    <p>
                      By setting up an Anti-Phishing Code, you will be able to
                      tell if your notification emails are coming from
                      Tokocrypto or phishing attempts
                    </p>
                  </div>
                  <button className="btn-outlined-yellow">Enable</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
