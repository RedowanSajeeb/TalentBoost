import React from 'react';
import Lottie from "lottie-react";
import not404 from "../../assets/404-not-found.json";
const Not404 = () => {
    return (
      <div className=" side-container">
        <Lottie
          className="md:mt-10 h-96"
          animationData={not404}
          loop={true}
        />
      </div>
    );
};

export default Not404;