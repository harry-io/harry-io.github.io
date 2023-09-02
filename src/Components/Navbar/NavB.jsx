import { useState } from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./NavB.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineClose } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { TbListDetails } from "react-icons/tb";
import { FaSuperpowers } from "react-icons/fa";
import { MdWorkspacesOutline } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";

import { Link } from "react-scroll";
const links = [
  { path: "home", text: "HOME", icon: <GoHome />, class: "" },
  { path: "about", text: "ABOUT", icon: <TbListDetails /> },
  { path: "skills", text: "SKILLS", icon: <FaSuperpowers /> },
  { path: "projects", text: "PROJECTS", icon: <MdWorkspacesOutline /> },
  { path: "contact", text: "CONTACT", icon: <RiMessageLine /> },
];

const NavB = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar_b_main_div">
      {/* ------------------------- */}
      <div className="navB_logo">
        <img
          onClick={() => (window.location.href = "harry-io.github.io")}
          style={{ width: "100%", cursor: "pointer" }}
          src="https://i.ibb.co/7nhdFP6/Logo.png"
          alt="logo"
        />
      </div>
      <div className="navB_ham" onClick={() => setShow(!show)}>
        <FontAwesomeIcon
          className="ellipsis"
          icon={faEllipsis}
          style={{ color: "#00ff00" }}
        />
        {show && (
          <div className="ham_menu">
            <div className="ham_menu_close">
              <AiOutlineClose
                className="close_icon"
                onClick={() => setShow(!setShow)}
              />
            </div>
            <div className="ham_menu_inner">
              {links.map((link) => (
                <div key={link.text} className="nav_b_redir_link_container">
                  <div className="icons_ham_menu">{link.icon}</div>
                  <Link
                    // onClick={() => setShow(!setShow)}
                    id="nav-link"
                    className={`nav_b_redir_link nav-link ${link.path}`}
                    to={link.path}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    {link.text}
                  </Link>
                </div>
              ))}
              <div className="resume_btn_b">
                <a
                  href="https://drive.google.com/uc?export=download&id=1X_gCg31PVf4WjuU3J3xmNjyCoUNDgfic"
                  download
                >
                  <button
                    id="resume-button-1"
                    style={{
                      border: "1px solid #00ff00",
                      background: "inherit",
                      borderRadius: "5px",
                      padding: "8px 15px",
                      boxShadow:
                        " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                      fontWeight: 500,
                      cursor: "pointer",
                      color: "#00ff00",
                    }}
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1X_gCg31PVf4WjuU3J3xmNjyCoUNDgfic/view?usp=share_link",
                        "_blank"
                      )
                    }
                  >
                    Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      {/*  */}
      {/* ------------------------- */}
    </div>
  );
};
export default NavB;
