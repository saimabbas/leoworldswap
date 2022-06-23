import React, { useState } from "react";
import ImportIcon from "../assets/Icons/ImportIcon";
import ExportIcon from "../assets/Icons/ExportIcon";
import Header from "../components/Header";
import Nav from "../components/Nav";
import BTCLogo from "../assets/Img/btc-logo.png";
import DCRLogo from "../assets/Img/dcr-logo.png";
import DGBLogo from "../assets/Img/dgb-logo.png";
import ETHLogo from "../assets/Img/eth-logo.png";
import POTLogo from "../assets/Img/pot-logo.png";
import USDTLogo from "../assets/Img/usdt-logo.png";

import BellIcon from "../assets/Icons/BellIcon";
import ChevronDownIcon from "../assets/Icons/ChevronDownIcon";
import MoonIcon from "../assets/Icons/MoonIcon";
import SearchIcon from "../assets/Icons/SearchIcon";
import SunIcon from "../assets/Icons/SunIcon";
import UserProfileImg from "../assets/Img/user-profile.png";
import HeaderLogo from "../assets/Img/header-logo.png";
import HeaderLogoDark from "../assets/Img/header-logo-dark.png";
const Assets = () => {
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
          <div className="assets-page lws-rounded-box">
            <div className="assets-total-box">
              <div className="assets-tot-left">
                <span>Total Balance</span>
                <h6>$372,825.32 USD</h6>
              </div>
              <div className="assets-tot-btn">
                <button className="btn-filled-yellow">
                  <ExportIcon color="#fff" /> Withdraw
                </button>
                <button className="btn-outlined-gray-icon">
                  <ImportIcon color="#A6A9B9" /> Deposit
                </button>
              </div>
            </div>
            <div className="assets-exc-bal-box">
              <div className="a-exc-bal-left">
                <div className="a-exc-box">
                  <div className="assets-orange"></div>
                  <div className="a-exc-para">
                    <span>Exchange Balance</span>
                    <h6>0.23843481 BTC</h6>
                    <p>$243,325,231.032</p>
                  </div>
                </div>
                <div className="a-exc-box">
                  <div className="assets-blue"></div>
                  <div className="a-exc-para">
                    <span>Asset Balance</span>
                    <h6>0.3283235 BTC</h6>
                    <p>$124,572,231.032</p>
                  </div>
                </div>
              </div>
              <div className="a-exc-bal-right">
                <div className="a-exc-right-top">
                  <div className="a-right-top-para">
                    <span>Balance Exchanged</span>
                    <h6>0.3098231 BTC</h6>
                  </div>
                  <div className="a-right-top-y-line">
                    <div className="y-inner-l"></div>
                  </div>
                </div>
                <div className="a-exc-right-top">
                  <div className="a-right-top-para">
                    <span>Asset Balance</span>
                    <h6>0.000271 BTC</h6>
                  </div>
                  <div className="a-right-top-y-line">
                    <div className="b-inner-l"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="assets-table">
            <h5>Asset Balances</h5>
            <div className="assets-main-table">
              <div className="lws-table">
                <table className="assets-table-content">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Total Balance</th>
                      <th>24h Chance</th>
                      <th>7d Chance</th>
                      <th>In Order</th>
                      <th>Balance Available</th>
                      <th>USD Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-border-box">
                      <td>1</td>
                      <td>
                        <div className="td-name">
                          <img src={BTCLogo} alt="BTCLogo" />
                          <h6>
                            Bitcoin <span>BTC</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="white-td">
                          <p>0.3824</p>
                        </div>
                      </td>
                      <td>
                        <div className="green-td">
                          <p>+12,32%</p>
                        </div>
                      </td>
                      <td>
                        <div className="green-td">
                          <p>+12,32%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$2,324.12</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-border-box">
                      <td>2</td>
                      <td>
                        <div className="td-name">
                          <img src={ETHLogo} alt="ETHLogo" />
                          <h6>
                            Ethereum <span>ETH</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="white-td">
                          <p>0.328,432</p>
                        </div>
                      </td>
                      <td>
                        <div className="red-td">
                          <p>-10,32%</p>
                        </div>
                      </td>
                      <td>
                        <div className="red-td">
                          <p>-10,32%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$1,327.32</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$12,000.00</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-border-box">
                      <td>3</td>
                      <td>
                        <div className="td-name">
                          <img src={DGBLogo} alt="DGBLogo" />
                          <h6>
                            Digibyte <span>DGB</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="white-td">
                          <p>33,494,431</p>
                        </div>
                      </td>
                      <td>
                        <div className="green-td">
                          <p>+44,12%</p>
                        </div>
                      </td>
                      <td>
                        <div className="green-td">
                          <p>+44,12%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$5,321.43</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$720,278.06</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-border-box">
                      <td>4</td>
                      <td>
                        <div className="td-name">
                          <img src={POTLogo} alt="POTLogo" />
                          <h6>
                            Potcoins <span>POT</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="white-td">
                          <p>382,238.12</p>
                        </div>
                      </td>
                      <td>
                        <div className="green-td">
                          <p>+9,53%</p>
                        </div>
                      </td>
                      <td>
                        <div className="green-td">
                          <p>+9,53%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$3,722.21</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$434,849.21</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-border-box">
                      <td>5</td>
                      <td>
                        <div className="td-name">
                          <img src={USDTLogo} alt="USDTLogo" />
                          <h6>
                            Tether <span>USTD</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="white-td">
                          <p>482.21</p>
                        </div>
                      </td>
                      <td>
                        <div className="green-td">
                          <p>+46,12%</p>
                        </div>
                      </td>
                      <td>
                        <div className="green-td">
                          <p>+46,12%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$2,520.23</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$284.12</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-border-box">
                      <td>6</td>
                      <td>
                        <div className="td-name">
                          <img src={DCRLogo} alt="DCRLogo" />
                          <h6>
                            Decred <span>DCR</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="white-td">
                          <p>482.21</p>
                        </div>
                      </td>
                      <td>
                        <div className="green-td">
                          <p>+46,12%</p>
                        </div>
                      </td>
                      <td>
                        <div className="green-td">
                          <p>+46,12%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$2,520.23</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$284.12</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-border-box">
                      <td>7</td>
                      <td>
                        <div className="td-name">
                          <img src={DCRLogo} alt="DCRLogo" />
                          <h6>
                            Decred <span>DCR</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="white-td">
                          <p>482.21</p>
                        </div>
                      </td>
                      <td>
                        <div className="green-td">
                          <p>+46,12%</p>
                        </div>
                      </td>
                      <td>
                        <div className="green-td">
                          <p>+46,12%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$2,520.23</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$284.12</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="white-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
