import React from "react";
import "./Home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="hero_home" id="home">
      <div className="hero_home_main">
        {/*  */}
        <div className="profile_picture">
          <img
            className="home-img"
            src="https://i.ibb.co/gjr3MNt/pfp.png"
            alt="pfp"
          />
        </div>
        {/*  */}

        <div className="hero_home_intro">
          <p className="intro_name">HI, I AM</p>
          <p className="intro_name_b" id="user-detail-name">
            Harikesh Kumar
          </p>
          <p className="intro_title">A Full Stack Web Developer</p>
          <button className="about_me_btn">
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              CONTACT ME
            </Link>
          </button>

          {/*  */}
        </div>
        {/*  */}
      </div>
      {/*  */}

      {/*  */}
    </div>
  );
};

export default Home;
