import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links-page">
      <Link to="/loading">
        1. <span>Loading</span>
      </Link>
      <Link to="/signin">
        2. <span>Sign In</span>
      </Link>
      <Link to="/assets">
        3. <span>Assets</span>
      </Link>
      <Link to="/deposit">
        4. <span>Deposit</span>
      </Link>
      <Link to="/detail">
        5. <span>Detail</span>
      </Link>
      <Link to="/liquidity">
        6. <span>Liquidity</span>
      </Link>
      <Link to="/market">
        7. <span>Market</span>
      </Link>
      <Link to="/setting">
        8. <span>Setting</span>
      </Link>
      {/* <div className="assets-main-table">
        <div className="lws-table">
          <table className="assets-table-content">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Desktop Version</th>
                <th>Mobile Version</th>
                <th>Remaining Components</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-border-box">
                <td>1</td>
                <td>
                  <div className="td-name">
                    <h6>Loading Screen</h6>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
              </tr>
              <tr className="table-border-box">
                <td>2</td>
                <td>
                  <div className="td-name">
                    <h6>Sign In</h6>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
              </tr>
              <tr className="table-border-box">
                <td>3</td>
                <td>
                  <div className="td-name">
                    <h6>Assets</h6>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
              </tr>
              <tr className="table-border-box">
                <td>4</td>
                <td>
                  <div className="td-name">
                    <h6>Deposit</h6>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
              </tr>
              <tr className="table-border-box">
                <td>5</td>
                <td>
                  <div className="td-name">
                    <h6>Detail</h6>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
              </tr>
              <tr className="table-border-box">
                <td>6</td>
                <td>
                  <div className="td-name">
                    <h6>Liquidity</h6>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
              </tr>
              <tr className="table-border-box">
                <td>7</td>
                <td>
                  <div className="td-name">
                    <h6>Market</h6>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
              </tr>
              <tr className="table-border-box">
                <td>8</td>
                <td>
                  <div className="td-name">
                    <h6>Setting</h6>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>Pending</p>
                  </div>
                </td>
                <td>
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
                <td>
                  {" "}
                  <div className="white-td">
                    <p>-</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default Links;
