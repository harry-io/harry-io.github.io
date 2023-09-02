import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import React from "react";
import "./About.css";
import { GrDownload } from "react-icons/gr";
import { Tooltip } from "@mui/material";

const About = () => {
  return (
    <div id="about" className="about_main_container about section">
      <div className="about_section">
        <div className="about_section_inner">
          <div className="about_heading">
            <h1>About</h1>
          </div>
          {/*  */}
          <div className="about_description">
            <div>
              <p className="about_desc_desc" id="user-detail-intro">
                An enthusiastic MERN Web Developer, a lifelong learner, and
                skilled in Full Stack Web Development. Knowledge of core HTML,
                CSS, JavaScript, and React. High adaptability to learn new
                technologies quickly and pay attention to details. Aims to
                leverage expertise and build world-class websites while
                facilitating organization in achieving functional goals.
              </p>
            </div>
            <div className="about_desc_icons">
              <Tooltip title="My Linkedin">
                <div>
                  <FaLinkedinIn
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      (window.location.href = "https://github.com/harry-io")
                    }
                  />
                </div>
              </Tooltip>
              <Tooltip title="My GitHub">
                <div>
                  <FaGithubAlt
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      (window.location.href = "https://github.com/harry-io")
                    }
                  />
                </div>
              </Tooltip>
              {/*  */}

              <a
                style={{}}
                href="https://drive.google.com/uc?export=download&id=1X_gCg31PVf4WjuU3J3xmNjyCoUNDgfic"
                download
              >
                <button
                  id="resume-button-1"
                  style={{
                    border: "none",
                    background: "inherit",
                    borderRadius: "5px",
                    padding: "8px 15px",
                    boxShadow:
                      " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1X_gCg31PVf4WjuU3J3xmNjyCoUNDgfic/view?usp=share_link",
                      "_blank"
                    )
                  }
                >
                  RESUME
                </button>
              </a>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default About;
