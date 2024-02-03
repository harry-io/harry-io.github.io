import React from "react";
import "./logo.css";

const Logo = (props) => {
  return (
    <div
      className="logo"
      style={{ width: `${props.size}px`, height: `${props.size}px` }}
    >
      <div className="logoInner">
        <div className="inner_divs inner_comp_a">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="inner_divs inner_comp_b"></div>
        <div className="inner_divs inner_comp_c">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
