import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Market = () => {
  return (
    <div className="app">
      <div className="dashboard-container">
        <Header />
        <Nav />
        <div className="dashboard-content-container">
          <div className="market-page">Today Top Market</div>
        </div>
      </div>
    </div>
  );
};

export default Market;
