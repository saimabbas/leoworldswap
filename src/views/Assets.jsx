import React from "react";
import ImportIcon from "../assets/Icons/ImportIcon";
import ExportIcon from "../assets/Icons/ExportIcon";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { Table } from "react-bootstrap";
import Bitcoins from "../assets/Icons/Bitcoins";
import ETH from "../assets/Icons/ETH";
import POT from "../assets/Icons/POT";
import DGB from "../assets/Icons/DGB";
import USDT from "../assets/Icons/USDT";
import DCR from "../assets/Icons/DCR";

const Assets = () => {
  return (
    <div className="app">
      <div className="dashboard-container">
        <Header />
        <Nav />
        <div className="dashboard-content-container">
          <div className="assets-page">
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
              <div>
                <Table responsive="sm" className="assets-table-content">
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
                          <div className="td-name-icon">
                            <Bitcoins />
                          </div>
                          <h6>
                            Bitcoin <span>BTC</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>0.3824</p>
                        </div>
                      </td>
                      <td>
                        <div className="two-four-td">
                          <p>+12,32%</p>
                        </div>
                      </td>
                      <td>
                        <div className="two-four-td">
                          <p>+12,32%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$2,324.12</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-border-box">
                      <td>2</td>
                      <td>
                        <div className="td-name">
                          <div className="td-name-icon-1">
                            <ETH />
                          </div>
                          <h6>
                            Ethereum <span>ETH</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>0.328,432</p>
                        </div>
                      </td>
                      <td>
                        <div className="two-four-td-1">
                          <p>-10,32%</p>
                        </div>
                      </td>
                      <td>
                        <div className="two-four-td-1">
                          <p>-10,32%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$1,327.32</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$12,000.00</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-border-box">
                      <td>3</td>
                      <td>
                        <div className="td-name">
                          <div className="td-name-icon-2">
                            <DGB />
                          </div>
                          <h6>
                            Digibyte <span>DGB</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>33,494,431</p>
                        </div>
                      </td>
                      <td>
                        <div className="two-four-td">
                          <p>+44,12%</p>
                        </div>
                      </td>
                      <td>
                        <div className="two-four-td">
                          <p>+44,12%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$5,321.43</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$720,278.06</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-border-box">
                      <td>4</td>
                      <td>
                        <div className="td-name">
                          <div className="td-name-icon-3">
                            <POT />
                          </div>
                          <h6>
                            Potcoins <span>POT</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>382,238.12</p>
                        </div>
                      </td>
                      <td>
                        <div className="two-four-td">
                          <p>+9,53%</p>
                        </div>
                      </td>
                      <td>
                        <div className="two-four-td">
                          <p>+9,53%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$3,722.21</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$434,849.21</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-border-box">
                      <td>5</td>
                      <td>
                        <div className="td-name">
                          <div className="td-name-icon-4">
                            <USDT />
                          </div>
                          <h6>
                            Tether <span>USTD</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>482.21</p>
                        </div>
                      </td>
                      <td>
                        <div className="two-four-td">
                          <p>+46,12%</p>
                        </div>
                      </td>
                      <td>
                        <div className="two-four-td">
                          <p>+46,12%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$2,520.23</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$284.12</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-border-box">
                      <td>6</td>
                      <td>
                        <div className="td-name">
                          <div className="td-name-icon-5">
                            <DCR />
                          </div>
                          <h6>
                            Decred <span>DCR</span>
                          </h6>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>482.21</p>
                        </div>
                      </td>
                      <td>
                        <div className="two-four-td">
                          <p>+46,12%</p>
                        </div>
                      </td>
                      <td>
                        <div className="two-four-td">
                          <p>+46,12%</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$2,520.23</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$284.12</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>$8.323.852</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assets;
