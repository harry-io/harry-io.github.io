import { Link } from "react-scroll";
import { HiDownload } from "react-icons/hi";
import { MdOutlineOpenInNew } from "react-icons/md";

import "./NavA.css";
import Logo from "../Logo/Logo";
const links = [
  { path: "home", text: "HOME", class: "nav-link home" },
  { path: "about", text: "ABOUT", class: "nav-link about" },
  { path: "skills", text: "SKILLS", class: "nav-link skills" },
  { path: "projects", text: "PROJECTS", class: "nav-link projects" },
  { path: "contact", text: "CONTACT", class: "nav-link contact" },
];

const NavA = () => {
  return (
    <div className="navbar_a_main_div">
      {/* ------------------------- */}
      <div className="navbar_part_a">
        {/* <img
          className="nav_logo"
          style={{ width: "100%" }}
          src="https://i.ibb.co/7nhdFP6/Logo.png"
          alt="logo"
        /> */}
        <Logo size={45} />
      </div>
      <div className="navbar_part_b">
        {/*  */}
        <div>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            HOME
          </Link>
        </div>
        {/*  */}
        <div>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            ABOUT
          </Link>
        </div>
        {/*  */}
        <div>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            SKILLS
          </Link>
        </div>
        {/*  */}
        <div>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            PROJECTS
          </Link>
        </div>
        {/*  */}
        <div>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            CONTACT
          </Link>
        </div>
        {/*  */}

        {/* RESUME BUTTON */}
        <div className="resume_btn">
          <a
            href="https://drive.google.com/uc?export=download&id=1X_gCg31PVf4WjuU3J3xmNjyCoUNDgfic"
            download
            style={{}}
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

      {/* ------------------------- */}
    </div>
  );
};
export default NavA;
