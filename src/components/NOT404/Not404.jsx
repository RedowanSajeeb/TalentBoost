import React from 'react';
import Lottie from "lottie-react";
import not404 from "../../assets/404-not-found.json";
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
const Not404 = () => {
    return (
      <div className=" side-container">
        <Lottie className="md:mt-10 h-96" animationData={not404} loop={true} />
        <div className="text-center mt-10">
          <Link to={"/"}>
            <Button
              variant="gradient"
              size="lg"
              className=" btn-clr lg:inline-block"
            >
              <span className="font-style">Go to Back Bro!</span>
            </Button>
          </Link>
        </div>
      </div>
    );
};

export default Not404;