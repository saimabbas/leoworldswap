import React from "react";
import AssetsIcon from "../assets/Icons/AssetsIcon";
import ExchangeIcon from "../assets/Icons/ExchangeIcon";
import MarketIcon from "../assets/Icons/MarketIcon";
import HelpCenter from "../assets/Img/help-center-icon.png";
import ChevronDownIcon from "../assets/Icons/ChevronDownIcon";
import HeaderLogo from "../assets/Img/header-logo.png";
import HeaderLogoDark from "../assets/Img/header-logo-dark.png";
import ExportIcon from "../assets/Icons/ExportIcon";
import UserProfileImg from "../assets/Img/user-profile.png";

const Nav = () => {
  return (
    <nav>
      <div className="nav-content">
        <div className="nav-top-box">
          <div className="nav-top">
            <img className="dt-element" src={HeaderLogo} alt="HeaderLogo" />
            <img className="lt-element" src={HeaderLogoDark} alt="HeaderLogo" />
          </div>
          <div className="nav-center">
            <ul>
              <li>
                <a href="#">
                  <MarketIcon color="#a6a9b9" />
                  <span>Market</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <AssetsIcon color="#a6a9b9" />
                  <span>Assets</span>
                </a>
              </li>
              <li>
                <a href="#" className="active-nav-link">
                  <ExchangeIcon color="#DAB539" />
                  <span>Exchange</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-bottom">
          <div className="help-center-box">
            <img src={HelpCenter} alt="HelpCenter" />
            <h6>Help Center</h6>
            <p>Having trouble in LeoXL? Please contact us for more question.</p>
            <button className="btn-filled-yellow">
              {" "}
              <ExportIcon color="#fff" /> Help Center
            </button>
          </div>
        </div>
      </div>
      <div className="nav-mob">
        <a href="#">
          <MarketIcon color="#a6a9b9" />
        </a>
        <a href="#">
          <AssetsIcon color="#a6a9b9" />
        </a>
        <a href="#" className="active-nav-link">
          <ExchangeIcon color="#DAB539" />
        </a>
        <div className="mob-profile-dropup">
          <img src={UserProfileImg} alt="UserProfileImg" />
          <ChevronDownIcon color="#a6a9b9" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
