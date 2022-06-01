import React from "react";
import AssetsIcon from "../assets/Icons/AssetsIcon";
import ExchangeIcon from "../assets/Icons/ExchangeIcon";
import MarketIcon from "../assets/Icons/MarketIcon";
import HelpCenter from "../assets/Img/help-center-icon.png";

import HeaderLogo from "../assets/Img/header-logo.png";
import ExportIcon from "../assets/Icons/ExportIcon";
const Nav = () => {
  return (
    <nav>
      <div className="nav-content">
        <div className="nav-top-box">
          <div className="nav-top">
            <img src={HeaderLogo} alt="HeaderLogo" />
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
    </nav>
  );
};

export default Nav;
