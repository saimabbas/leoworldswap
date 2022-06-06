import React from "react";
import YellowInfo from "../assets/Icons/YellowInfo";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { Table } from "react-bootstrap";
import Bitcoins from "../assets/Icons/Bitcoins";
import QRCode from "../assets/Img/QRcode.png";
import ETH from "../assets/Icons/ETH";
import POT from "../assets/Icons/POT";
import DGB from "../assets/Icons/DGB";
import USDT from "../assets/Icons/USDT";
import DCR from "../assets/Icons/DCR";

const Deposit = () => {
  return (
    <div className="app">
      <div className="dashboard-container">
        <Header />
        <Nav />
        <div className="dashboard-content-container">
          <div className="deposit-page">
            <h5>Deposit</h5>
            <div className="Deposit-main-box">
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
                <img src={QRCode} alt="" />
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
                  <p>View All</p>
                  <p>Deposit hasn’t arrived? Click here</p>
                </div>
              </div>
              <div className="Deposit-table-box">
                <Table responsive="sm" className="assets-table-content">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Balance Added</th>
                      <th>Time</th>
                      <th>Address / Transaction ID</th>
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
                        <div className="two-four-td-y">
                          <p>On Proccess</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>0.00328 ETH</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>2020/01/01 06:05</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>0xd390a8b30223d...</p>
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
                        <div className="two-four-td">
                          <p>Arrived</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>0.00004869 BTC</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>2020/01/01 06:05</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>0x432447c492f39...</p>
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
                        <div className="two-four-td">
                          <p>Arrived</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>1 BTC</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>2020/01/01 06:05</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>0xd6fc578f160ac...</p>
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
                        <div className="two-four-td">
                          <p>Arrived</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>10 ETH</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>2020/01/01 06:05</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>0x364a428dbe91e...</p>
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
                        <div className="two-four-td">
                          <p>Arrived</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>1.89483765 BTC</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>2020/01/01 06:05</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>0x1462ec88977c6...</p>
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
                        <div className="two-four-td">
                          <p>Arrived</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>21.8976 ETH</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>2020/01/01 06:05</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>0x555a588298157...</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-border-box">
                      <td>7</td>
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
                        <div className=" two-four-td-y">
                          <p>On Proccess</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>0.00328 ETH</p>
                        </div>
                      </td>
                      <td>
                        <div className="total-balance-td">
                          <p>2020/01/01 06:05</p>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="total-balance-td">
                          <p>0xd390a8b30223d...</p>
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

export default Deposit;
