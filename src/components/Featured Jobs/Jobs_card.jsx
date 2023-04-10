import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

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
      <div className="border rounded-lg gap-10 m-6">
        <div className="ms-5 py-5 ">
          <img className="h-10" src={company_logo} alt="" />
          <h3>{job_title}</h3>
          <h4>{company_name}</h4>
          <div>
            <h3>{remote_or_onsite}</h3>
            <h3>{fulltime_or_parttime}</h3>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <h3>{location}</h3>
            </div>
            <div>
              <img src="" alt="" />
              <h3>{salary}</h3>
            </div>
          </div>
          {/* Button */}
          <Button
            variant="gradient"
            size="sm"
            className=" mt-3 btn-clr lg:inline-block"
          >
            <span className="font-style">View Details</span>
          </Button>
        </div>
      </div>
    );
};

export default Jobs_card;