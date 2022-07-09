import React, { useState, useEffect } from "react";
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
import LoadingLogo from "../assets/Img/LoadingLogo.png";
import { Dropdown } from "react-bootstrap";
import {
  MdArrowDropUp,
  MdClose,
  MdExpandLess,
  MdLogout,
  MdMenu,
  MdMenuOpen,
  MdSettings,
} from "react-icons/md";
import AssetsIcon from "../assets/Icons/AssetsIcon";
import MarketIcon from "../assets/Icons/MarketIcon";
import ExchangeIcon from "../assets/Icons/ExchangeIcon";
import NFTIcon from "../assets/Icons/NFTIcon";
import Transactions from "../assets/Icons/Transactions";
import Liquidity from "../assets/Icons/Liquidity";
import { gsap } from "gsap";
import $ from "jquery";
const Market = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMenuOpen, setisMenuOpen] = useState(true);
  const changeToLightTheme = () => {
    setIsDarkTheme(false);
    console.log("Changed to LIGHT THEME");
  };
  const changeToDarkTheme = () => {
    setIsDarkTheme(true);
    console.log("Changed to DARK THEME");
  };
  const menuClicked = () => {
    console.log("MENU ICON CLICKED");
  };
  const closeNavFun = () => {
    $("header").css({
      width: "calc(100% - 7.5rem) ",
    });
    $("nav").css({
      width: "7.5rem",
    });
    $("nav span").css({
      display: "none",
    });
    $(".dashboard-content-container").css({
      padding: "10rem 2.5rem 2.5rem 9.5rem",
    });
    setisMenuOpen(false);
  };
  const openNavFun = () => {
    $("header").css({
      width: "calc(100% - 22.5rem)",
    });
    $(".dashboard-content-container").css({
      padding: "10rem 2.5rem 2.5rem 25rem",
    });
    $("nav").css({
      width: "22.5rem",
    });
    $("nav span").css({
      display: "block",
    });
    setisMenuOpen(true);
  };
  return (
    <div className={`app ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      <div className="dashboard-container">
        <header>
          <div className="header-content">
            <div className="header-left">
              <div className="menu-icon" onClick={menuClicked}>
                {isMenuOpen ? (
                  <div className="close-nav-btn" onClick={closeNavFun}>
                    <MdMenuOpen />
                  </div>
                ) : (
                  <div className="open-nav-btn" onClick={openNavFun}>
                    <MdMenu />
                  </div>
                )}
              </div>
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

              <div className="user-dropdown-box">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
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
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <a href="#">
                      <MdSettings />
                      Settings
                    </a>
                    <a href="#">
                      <MdLogout />
                      Logout
                    </a>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="header-mob">
            <div className="header-mob-left">
              <div className="lws-logo">
                <img src={LoadingLogo} alt="Logo" />
                <span>LeoWorldSwap</span>
              </div>
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
        <nav>
          <div className="nav-content">
            <div className="nav-top-box">
              <div className="nav-top">
                <div className="lws-logo">
                  <img src={LoadingLogo} alt="Logo" />
                  <span>LeoWorldSwap</span>
                </div>
                {/* <img className="dt-element" src={HeaderLogo} alt="HeaderLogo" /> */}
                {/* <img className="lt-element" src={HeaderLogoDark} alt="HeaderLogo" /> */}
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
                  <li>
                    <a href="#">
                      <Liquidity color="#a6a9b9" />
                      <span>Liquidity</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Transactions color="#a6a9b9" />
                      <span>Transactions</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <NFTIcon color="#a6a9b9" />
                      <span>NFT</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-bottom">
              {/* <div className="help-center-box">
            <img src={HelpCenter} alt="HelpCenter" />
            <h6>Help Center</h6>
            <p>Having trouble in LeoXL? Please contact us for more question.</p>
            <button className="btn-filled-yellow">
              {" "}
              <ExportIcon color="#fff" /> Help Center
            </button>
          </div> */}
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
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <div className="mob-profile-dropup">
                    <img src={UserProfileImg} alt="UserProfileImg" />
                    <MdExpandLess />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <a href="#">
                    <MdSettings />
                    Settings
                  </a>
                  <a href="#">
                    <MdLogout />
                    Logout
                  </a>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </nav>
        <div className="dashboard-content-container">
          <div className="market-page">
            <h5>Cryptocurrencies</h5>
            <div className="MarketPageButtons">
              <div className="MarkerbtnLeft">
                <a href="#">Gainers</a>
                <a href="#">Lossers</a>
                <a href="#">24h Vol</a>
              </div>
              {/* <div className="MarketbtnRight">
                <select name="market" id="market">
                  <option value="all">All Market</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div> */}
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
            <button className="btn-filled-yellow">Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
