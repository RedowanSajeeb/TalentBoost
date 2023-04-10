import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "./../../assets/94056-development.json";
const Header = () => {
    return (
      <div className="md:flex side-container  ">
        <div>
          <h1 className="big-tital font-style">
            Moving Closer To Your{" "}
            <span className="span font-style">Dream Job</span>
          </h1>
          <p className="font-style mt-5 mb-5 w">
            Persistence, hard work, and dedication are often necessary to land
            your dream job. Don't let setbacks or rejections discourage you.
            Keep learning and growing, seek mentors and supporters for guidance
            and encouragement, and stay focused on your vision.
          </p>
          <button className="customs-button ">Get Started</button>
        </div>
        <div>
          <Lottie
            className="md:-mt-44"
            animationData={groovyWalkAnimation}
            loop={true}
          />
        </div>
      </div>
    );
};

export default Header;