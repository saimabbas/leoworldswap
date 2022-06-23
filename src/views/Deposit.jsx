import React, { useState } from "react";
import YellowInfo from "../assets/Icons/YellowInfo";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Bitcoins from "../assets/Icons/Bitcoins";
import QRCode from "../assets/Img/QRcode.png";
import QRCodeDark from "../assets/Img/QRcode-dark.png";
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
const Deposit = () => {
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
          <div className="deposit-page">
            <h5>Deposit</h5>
            <div className="Deposit-main-box lws-rounded-box">
              <div className="dmainleft">
                <label htmlFor="Assets">Asset Name</label>
                <select name="Assets">
                  <option value="">
                    <div className="Optioncontent">
                      <div className="td-name-icon">
                        <Bitcoins />
                      </div>
                      <h6>BTC</h6>
                      <p>Bitcoin</p>
                    </div>
                  </option>
                  <option value="">
                    <div className="td-name-icon">
                      <Bitcoins />
                    </div>
                    <h6>BTC</h6>
                    <p>Bitcoin</p>
                  </option>
                  <option value="">
                    <div className="td-name-icon">
                      <Bitcoins />
                    </div>
                    <h6>BTC</h6>
                    <p>Bitcoin</p>
                  </option>
                </select>
                <label htmlFor="DAmount">Deposit Amount</label>
                <select name="DAmount">
                  <option value="">
                    <div className="td-name-icon-1">
                      <Bitcoins />
                    </div>
                    <p>450</p>
                  </option>
                  <option value="">
                    <div className="td-name-icon-1">
                      <Bitcoins />
                    </div>
                    <p>450</p>
                  </option>
                  <option value="">
                    <div className="td-name-icon-1">
                      <Bitcoins />
                    </div>
                    <p>450</p>
                  </option>
                </select>
                <div className="dmainlpara">
                  <h6>Earned Bitcoins :</h6>
                  <h4>0</h4>
                </div>
                <div className="dmainlpara">
                  <h6>Fee or Tax :</h6>
                  <h4>0</h4>
                </div>
                <div className="dmainlpara">
                  <h6>Total Earned :</h6>
                  <h4>0</h4>
                </div>
                <div className="dmainlyellow">
                  <YellowInfo />
                  <p>
                    Your balance will be automatically filled if you make a
                    deposit in USD, if not your ballance will automatically
                    converted by coin you choose
                  </p>
                </div>
                <div className="dmainlbtn">
                  <button className="btn-outlined-gray">Cancel</button>
                  <button className="btn-filled-yellow">Continue</button>
                </div>
              </div>
              <div className="dmainright">
                <img className="dt-element" src={QRCode} alt="QRCode" />
                <img className="lt-element" src={QRCodeDark} alt="QRCode" />
                <p>
                  Use your camera on Mobile Banking or Ewallet and we will
                  confirm the qr code payment
                </p>
              </div>
            </div>
            <div className="DepositHistoryTable">
              <div className="DHTabbox">
                <h6>Deposit History</h6>
                <div className="DHTRight">
                  <a href="#">View All</a>
                  <a href="#">Deposit hasn’t arrived? Click here</a>
                </div>
              </div>
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
    </div>
  );
};

export default Deposit;
