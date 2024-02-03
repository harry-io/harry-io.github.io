import { FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import React from "react";
import "./About.css";
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
                    style={{
                      cursor: "pointer",
                      background: "var(--color-b)",
                      color: "var(--color-c)",
                      padding: "0.5rem",
                      borderRadius: "50%",
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                    }}
                    onClick={() =>
                      (window.location.href = "https://github.com/harry-io")
                    }
                  />
                </div>
              </Tooltip>
              <Tooltip title="My GitHub">
                <div>
                  <FaGithubAlt
                    style={{
                      cursor: "pointer",
                      background: "var(--color-b)",
                      color: "var(--color-c)",
                      padding: "0.5rem",
                      borderRadius: "50%",
                      boxShadow:
                        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
                    }}
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
                    background: "var(--color-b)",
                    padding: "8px 15px",
                    fontWeight: 500,
                    cursor: "pointer",
                    color: "var(--color-c)",
                    boxShadow:
                      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
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
