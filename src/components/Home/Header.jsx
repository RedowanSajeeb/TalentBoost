import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "./../../assets/94056-development.json";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <div className=" ms-5 md:grid grid-cols-2 side-container  ">
        <div>
          <h1 className="  big-tital font-style">
            Moving Closer To Your{" "}
            <span className="span font-style">Dream Job</span>
          </h1>
          <p className=" me-3 font-style mt-5 mb-5  dark-color">
            Persistence, hard work, and dedication are often necessary to land
            your dream job. Don't let setbacks or rejections discourage you.
            Keep learning and growing, seek mentors and supporters for guidance
            and encouragement, and stay focused on your vision.
          </p>
          <Link to={"/"}>
            <button className="customs-button ">Get Started</button>
          </Link>
        </div>
        <div className="md:mt-24 md:ms-14 col-span-1 ">
          <Lottie
            className="md:-mt-44 h-fit"
            animationData={groovyWalkAnimation}
            loop={true}
          />
        </div>
      </div>
    );
};

export default Header;