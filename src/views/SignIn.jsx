import React from "react";
import HyperLink from "../assets/Icons/HyperLink";
import Verify from "../assets/Icons/Verify";
import { FloatingLabel, Form } from "react-bootstrap";

const SignIn = () => {
  return (
    <div className="app">
      <div className="sign-inpage">
        <div className="sign-in-content">
          <h3>Sign in to LeoWorldSwap</h3>
          <div className="sign-in-flabel">
            <input type="text" placeholder="EMAIL" />
            <input type="password" placeholder="PASSWORD" />
          </div>
          <div className="sign-in-link">
            <HyperLink />
            <h6>Forgot Password?</h6>
          </div>
          <button className="btn-outlined-gray">
            Click to verify <Verify />
          </button>
          <button className="btn-filled-yellow ">Sign in</button>
          <div className="sign-in-last">
            <p>Not a member?</p>
            <div className="sign-in-link">
              <HyperLink />
              <h6>Sign up now</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
