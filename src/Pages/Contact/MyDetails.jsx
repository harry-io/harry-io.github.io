import React from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Tooltip } from "@mui/material";

const MyDetails = () => {
  return (
    <div className="my_personal_details">
      <div>
        <h2>Contact info</h2>
      </div>
      {/*  */}
      <div>
        <div className="my_location">
          <HiLocationMarker style={{ cursor: "pointer" }} />
          <p style={{ cursor: "pointer" }}>Patna, Bihar</p>
        </div>
        <div
          className="phone_number"
          id="contact-phone"
          onClick={() => (window.location.href = "tel:+917632965249")}
        >
          <BsFillPhoneFill style={{ cursor: "pointer" }} />
          <p style={{ cursor: "pointer" }}>+91 7632965249</p>
        </div>
        {/*  */}
        <div
          className="email_address"
          id="contact-email"
          onClick={() => (window.location.href = "mailto:r1ego9262@gmail.com")}
        >
          <MdMarkEmailUnread style={{ cursor: "pointer" }} />
          <p style={{ cursor: "pointer" }}>r1ego9262@gmail.com</p>
        </div>
        {/*  */}
        <div className="contact_social_icons">
          <Tooltip title="My Linkedin">
            <div>
              <FaLinkedinIn
                id="contact-linkedin"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/harikesh-kumar-572a9923a/")
                }
              />
            </div>
          </Tooltip>
          <Tooltip title="My Github">
            <div>
              <FaGithubAlt
                id="contact-github"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  (window.location.href = "https://github.com/harry-io")
                }
              />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
