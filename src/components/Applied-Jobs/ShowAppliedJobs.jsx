import React from "react";
import {
  Button
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ShowAppliedJobs = ({ job }) => {
  return (
    <div className="side-container mt-5 flex  justify-between md:ms-80 items-center ">
      {job.map((j) => (
        <div key={j.id}>
          <img className="h-10" src={j.company_logo} alt="Company logo" />
          <h1>{j.job_title}</h1>
          <h2>{j.company_name}</h2>
          <div className="flex gap-5">
            <p>{j.remote_or_onsite}</p>
            <p> {j.fulltime_or_parttime}</p>
          </div>
          <div className="flex gap-5">
            <p> {j.location}</p>
            <p>{j.salary}</p>
          </div>
        </div>
      ))}
      {/* ------------------------------- */}
      <div className="md:me-52">
        {job.map((j) => (
          <div key={j.id}>
            <Link to={`/ViewDetails/${j.id}`}>
              <Button
                variant="gradient"
                size="sm"
                className=" mt-3 btn-clr lg:inline-block"
              >
                <span className="font-style">View Details</span>
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAppliedJobs;
