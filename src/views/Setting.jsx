import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { MdClear } from "react-icons/md";
import Google from "../assets/Icons/Google";
import SMS from "../assets/Icons/SMS";
import Email from "../assets/Icons/Email";
import InfoImg from "../assets/Img/info.png";

const Setting = () => {
  return (
    <div className="app">
      <div className="dashboard-container">
        <Header />
        <Nav />
        <div className="dashboard-content-container">
          <div className="setting-page">
            <div className="setting-header">
              <h2>Account Security</h2>
            </div>
            <div className="setting-cross">
              <div className="setting-cross-inner">
                <div className="setting-cross-box">
                  <MdClear />
                </div>
                <h6>2 FA</h6>
              </div>
              <div className="setting-cross-inner">
                <div className="setting-cross-box">
                  <MdClear />
                </div>
                <h6>Identity Verification</h6>
              </div>
              <div className="setting-cross-inner">
                <div className="setting-cross-box">
                  <MdClear />
                </div>
                <h6>Enable Anti-phising Code</h6>
              </div>
              <div className="setting-cross-inner">
                <div className="setting-cross-box">
                  <MdClear />
                </div>
                <h6>Turn-on Withdrawal Whitelist</h6>
              </div>
            </div>
          </div>
          <div className="setting-main-box">
            <div className="setting-left">
              <div className="sleft-fa">
                <h5>2FA</h5>
                <div className="google-authentication">
                  <div className="goog-auth-left">
                    <div className="goog-icon">
                      <Google />
                    </div>
                    <div className="goog-para">
                      <h6>Google Authentication</h6>
                      <p>Used for withdrawals and security modifications</p>
                    </div>
                  </div>
                  <div className="goog-auth-right">
                    <button className="btn-outlined-yellow">Enable</button>
                  </div>
                </div>
                <div className="google-authentication">
                  <div className="goog-auth-left">
                    <div className="goog-icon">
                      <SMS />
                    </div>
                    <div className="goog-para">
                      <h6>SMS Authentication</h6>
                      <p>Used for withdrawals and security modifications</p>
                    </div>
                  </div>
                  <div className="goog-auth-right">
                    <button className="btn-outlined-yellow">Enable</button>
                  </div>
                </div>
                <div className="email-authentication">
                  <div className="goog-auth-left">
                    <div className="goog-icon">
                      <Email />
                    </div>
                    <div className="goog-para">
                      <h6>Email Verification</h6>
                      <p>Used for withdrawals and security modifications</p>
                    </div>
                  </div>
                  <div className="goog-auth-right">
                    <button className="btn-outlined-gray">Verify</button>
                  </div>
                </div>
              </div>
              <div className="sleft-dm">
                <h5>Device Management</h5>
                <button className="btn-outlined-gray">Manage</button>
              </div>
              <div className="sleft-aa">
                <div className="sl-aa-para">
                  <h5>Account Activity</h5>
                  <p>Last signed in</p>
                  <h6>
                    Suspicius account activity? <span>Deactive Account</span>
                  </h6>
                </div>
                <button className="btn-outlined-gray">More</button>
              </div>
            </div>
            <div className="setting-right">
              <div className="sright-ILA">
                <div className="s-right-Iden-2">
                  <h5>Identify Verification</h5>
                  <button className="btn-outlined-gray">Verify</button>
                </div>
                <div className="s-right-Iden">
                  <h5>Login Password</h5>
                  <button className="btn-outlined-gray">Reset</button>
                </div>
                <div className="s-right-Iden-1">
                  <div className="s-right-para">
                    <h5>Login Password</h5>
                    <p>
                      Address Management allows you to save and write memos for
                      each of your withdrawal addresses.
                    </p>
                    <div className="s-right-off">
                      <span>Witelist Off</span>
                      <img src={InfoImg} alt="InfoImg" />
                    </div>
                  </div>
                  <button className="btn-outlined-gray">Manage</button>
                </div>
              </div>
              <div className="sright-apc">
                <div className="s-right-Iden-3">
                  <div className="s-right-para">
                    <h5>Anti-phising Code</h5>
                    <p>
                      By setting up an Anti-Phishing Code, you will be able to
                      tell if your notification emails are coming from
                      Tokocrypto or phishing attempts
                    </p>
                  </div>
                  <button className="btn-outlined-yellow">Enable</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
