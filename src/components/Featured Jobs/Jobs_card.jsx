import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

// ----------
const Jobs_card = ({ job}) => {
    // const jobsSlics = job.slice(0, 4);
    // console.log(jobsSlics);
    const {
      id,
      company_logo,
      job_title,
      company_name,
      remote_or_onsite,
      location,
      fulltime_or_parttime,
      salary,
      job_description,
      job_responsibility,
      educational_requirements,
      experiences,
      contact_information,
    } = job;
    // console.log(job_title);

    return (
      <div className="border rounded-lg m-6">
        <div className="p-10 ">
          <img className="h-28" src={company_logo} alt="" />
          <h3 className="font-bold text-2xl mt-3.5">{job_title}</h3>
          <h4 className="dark-color text-xl mt-2">{company_name}</h4>
          <div className="flex justify-start gap-3 mt-4 ">
            <h3 className=" text-indigo-800	 border border-indigo-500 w-20 text-center rounded">
              {remote_or_onsite}
            </h3>
            <h3 className=" text-indigo-800	 border border-indigo-500 w-20 text-center rounded">
              {fulltime_or_parttime}
            </h3>
          </div>
          <div className="mt-4 md:flex  items-center dark-color gap-4">
            <div className="flex  items-center">
              <img
                src="https://lh3.googleusercontent.com/yfVMFmY5Cs_xR7PsZviISQrdgCndkE0ZfsWzNznjSlx6xDWGalCTIXenw5nwjug8zkMf7NqfpxfJg2YtQq73eiP2Z2s5Oq1Ll1Rm77Wh"
                alt=""
              />
              <h3>{location}</h3>
            </div>
            <div className="flex items-center">
              <img
                src="https://lh3.googleusercontent.com/_rE0cS_0WENBmLUSx4fdNUdq94ioHVs5rXaIw9IVnTR7KF6FQlfU-SkeabXu0IslWxyW5d45ZKO76L9pROkt9LeLO49U9FWKTT4-N4vq"
                alt=""
              />
              <h3>{salary}</h3>
            </div>
          </div>
          {/* Button */}
          <Link to={`/ViewDetails/${id}`}>
            <Button
              variant="gradient"
              size="sm"
              className=" mt-6 btn-clr lg:inline-block"
            >
              <span className="font-style">View Details</span>
            </Button>
          </Link>
        </div>
      </div>
    );
};

export default Jobs_card;