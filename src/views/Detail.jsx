import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Bitcoins from "../assets/Icons/Bitcoins";
import ChevronDownIcon from "../assets/Icons/ChevronDownIcon";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import BellIcon from "../assets/Icons/BellIcon";
import MoonIcon from "../assets/Icons/MoonIcon";
import SearchIcon from "../assets/Icons/SearchIcon";
import SunIcon from "../assets/Icons/SunIcon";
import UserProfileImg from "../assets/Img/user-profile.png";
import HeaderLogo from "../assets/Img/header-logo.png";
import HeaderLogoDark from "../assets/Img/header-logo-dark.png";
import LoadingLogo from "../assets/Img/LoadingLogo.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
};

const labels = ["January", "February", "March", "April", "May", "June"];

export const data = {
  labels,
  datasets: [
    {
      label: "Q1",
      data: [
        [0, 3],
        [1, 1],
        [2, 5],
        [3, 6],
        [4, 4],
        [1, 3],
      ],
      borderColor: "#dab539",
      backgroundColor: "#dab539",
      color: "var(--fff-000)",
    },
  ],
};

const Detail = () => {
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
        <Nav />
        <div className="dashboard-content-container">
          <div className="detail-page">
            <div className="detail-grid">
              <div className="detailgridcontent1">
                <div className="dg-name-icon">
                  <Bitcoins />
                </div>
                <div className="dg-para">
                  <h5>BTC / USD</h5>
                  <h6>Bitcoin</h6>
                </div>
                <div className="dgdrop-icon">
                  <ChevronDownIcon color="#A6A9B9" />
                </div>
              </div>
              <div className="detailgridcontent-box">
                <div className="detailgridcontent">
                  <span>Current Price</span>
                  <p>1,322.321 USD</p>
                </div>
                <div className="detailgridcontent">
                  <span>24h Change</span>
                  <p>+12,32%</p>
                </div>
                <div className="detailgridcontent">
                  <span>All Time High</span>
                  <p>0.0000332</p>
                </div>
                <div className="detailgridcontent">
                  <span>All Time Low</span>
                  <p>0.0000332</p>
                </div>
                <div className="detailgridcontent">
                  <span>24h Volume</span>
                  <p>1,322.321 BTC</p>
                </div>
              </div>
            </div>
            <div className="detail-bottom-box">
              <div className="detail-bottom-left-box">
                <div className="detail-bottom-left-graph lws-rounded-box">
                  {/* <Chart data={data} axes={axes} /> */}

                  <Line options={options} data={data} />
                </div>
                <div className="detail-bottom-left lws-rounded-box">
                  <div className="detail-bot-leftbottom">
                    <h4>BTC Price Live Data</h4>
                    <p>
                      Bitcoin is a decentralized cryptocurrency originally
                      described in a 2008 whitepaper by a person, or group of
                      people, using the alias Satoshi Nakamoto. It was launched
                      soon after, in January 2009. <br /> <br /> <br /> Bitcoin
                      is a peer-to-peer online currency, meaning that all
                      transactions happen directly between equal, independent
                      network participants, without the need for any
                      intermediary to permit or facilitate them. Bitcoin was
                      created, according to Nakamoto’s own words, to allow
                      “online payments to be sent directly from one party to
                      another without going through a financial institution.”{" "}
                      <br /> <br />
                      <br /> Some concepts for a similar type of a decentralized
                      electronic currency precede BTC, but Bitcoin holds the
                      distinction of being the first-ever cryptocurrency to come
                      into actual use. <br /> <br />
                      <br /> Who Are the Founders of Bitcoin? <br /> Bitcoin’s
                      original inventor is known under a pseudonym, Satoshi
                      Nakamoto. As of 2021, the true identity of the person — or
                      organization — that is behind the alias remains unknown.
                    </p>
                  </div>
                </div>
              </div>
              <div className="detail-bottom-right lws-rounded-box">
                <div className="buttons-grid">
                  <button className="btn-filled-yellow">Buy</button>
                  <button className="btn-outlined-gray-icon">Swap</button>
                </div>
                <div className="dbright-price">
                  <p>Price</p>
                  <div className="dbright-para">
                    <h6>0.0000214</h6>
                    <h6>USD</h6>
                  </div>
                </div>
                <div className="dbright-price">
                  <p>Ammount</p>
                  <div className="dbright-para">
                    <h6>24</h6>
                    <h6>BTC</h6>
                  </div>
                </div>
                <div className="dbright-price">
                  <p>Total</p>
                  <div className="dbright-para">
                    <h6>2,582.21</h6>
                    <h6>USD</h6>
                  </div>
                </div>
                <button className="btn-filled-yellow">Sell Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
