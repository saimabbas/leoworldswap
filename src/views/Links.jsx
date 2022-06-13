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
    </div>
  );
};

export default Links;
