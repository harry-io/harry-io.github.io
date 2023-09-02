import { useState } from "react";
import { Link } from "react-scroll";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import "./NavC.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineClose } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { TbListDetails } from "react-icons/tb";
import { FaSuperpowers } from "react-icons/fa";
import { MdWorkspacesOutline } from "react-icons/md";
import { RiMessageLine } from "react-icons/ri";
const links = [
  { path: "home", text: "HOME", icon: <GoHome /> },
  { path: "about", text: "ABOUT", icon: <TbListDetails /> },
  { path: "skills", text: "SKILLS", icon: <FaSuperpowers /> },
  { path: "projects", text: "PROJECTS", icon: <MdWorkspacesOutline /> },
  { path: "contact", text: "CONTACT", icon: <RiMessageLine /> },
];

const NavC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar_c_main_div">
      {/* ------------------------- */}
      <div className="nav_c_inner">
        <div className="navC_logo">
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/7nhdFP6/Logo.png"
            alt="logo"
          />
        </div>
        <div className="navC_ham">
          <FontAwesomeIcon
            onClick={() => setShow(!show)}
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
                      onClick={() => setShow(!setShow)}
                      className="nav_b_redir_link"
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
      </div>
      {/* ------------------------- */}
    </div>
  );
};
export default NavC;
