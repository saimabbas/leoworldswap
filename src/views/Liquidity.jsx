import React from "react";
import RefreshIcon from "../assets/Icons/RefreshIcon";
import SettingsIcon from "../assets/Icons/SettingsIcon";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Liquidity = () => {
  return (
    <div className="app">
      <div className="dashboard-container">
        <Header />
        <Nav />
        <div className="dashboard-content-container">
          <div className="liquidity-page">
            <div className="liquidity-header">
              <h2>Your Liquidity</h2>
              <div className="liquidity-header-icons">
                <SettingsIcon />
                <RefreshIcon />
              </div>
            </div>
            <p>Remove liquidity to receive tokens back</p>
            <p className="liquidity-msg-p">
              Connect to a wallet to view your liquidity.
            </p>
            <button className="btn-filled-yellow">Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liquidity;
