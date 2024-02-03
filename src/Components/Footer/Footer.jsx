import React from "react";
import "./Footer.css";
import { FaReact } from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="footer_main_container">
      <div className="footer_main_inner_container">
        <div style={{ cursor: "pointer" }}>
          {/* <img
            className="footer_logo"
            src="https://i.ibb.co/7nhdFP6/Logo.png"
            alt="l2"
          /> */}
          <Logo size={45} />
          <p
            onClick={() =>
              window.location.assign("https://github.com/harry-io")
            }
          >
            Designed & Built by harry-io
          </p>
        </div>

        <div>
          <p>Built Using ReactJs</p>
          <FaReact style={{ fontSize: "1.6rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
