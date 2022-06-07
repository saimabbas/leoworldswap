import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Bitcoins from "../assets/Icons/Bitcoins";
import ChevronDownIcon from "../assets/Icons/ChevronDownIcon";

const Detail = () => {
  return (
    <div className="app">
      <div className="dashboard-container">
        <Header />
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
              <div className="detailgridcontent">
                <span>Last Price</span>
                <p>1,322.321 USD</p>
              </div>
              <div className="detailgridcontent">
                <span>24h Change</span>
                <p>+12,32%</p>
              </div>
              <div className="detailgridcontent">
                <span>24h High</span>
                <p>0.0000332</p>
              </div>
              <div className="detailgridcontent">
                <span>24h Low</span>
                <p>0.0000332</p>
              </div>
              <div className="detailgridcontent">
                <span>Volume</span>
                <p>1,322.321 BTC</p>
              </div>
            </div>
            <div className="detail-bottom-box">
              <div className="detail-bottom-left">
                <div className="detail-bot-leftbottom">
                  <h4>BTC Price Live Data</h4>
                  <p>
                    Bitcoin is a decentralized cryptocurrency originally
                    described in a 2008 whitepaper by a person, or group of
                    people, using the alias Satoshi Nakamoto. It was launched
                    soon after, in January 2009. <br /> <br /> <br /> Bitcoin is
                    a peer-to-peer online currency, meaning that all
                    transactions happen directly between equal, independent
                    network participants, without the need for any intermediary
                    to permit or facilitate them. Bitcoin was created, according
                    to Nakamoto’s own words, to allow “online payments to be
                    sent directly from one party to another without going
                    through a financial institution.” <br /> <br />
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
              <div className="detail-bottom-right">
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
