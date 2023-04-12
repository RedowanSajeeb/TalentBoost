import React from "react";
import {
  Button
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const ShowAppliedJobs = ({ job }) => {
  return (
    <div className="side-container ">
      {job.map((j) => (
        <div
          className="md:flex border mt-20 rounded p-5 mb-6 justify-between  items-center"
          key={j.id}
        >
          <div className="photo-card p-5  md:p-10 mb-3">
            <img className="" src={j.company_logo} alt="Company logo" />
          </div>
          <div className="">
            <h1 className="font-bold text-2xl mt-3.5">{j.job_title}</h1>
            <h2 className="dark-color text-xl mt-2">{j.company_name}</h2>
            <div className="flex justify-start gap-3 mt-4">
              <h3 className=" text-indigo-800	 border border-indigo-500 w-20 text-center rounded">
                {j.remote_or_onsite}
              </h3>
              <h3 className=" text-indigo-800	 border border-indigo-500 w-20 text-center rounded">
                {" "}
                {j.fulltime_or_parttime}
              </h3>
            </div>
            <div className="mt-4 flex dark-color gap-4">
              <p className="flex">
                {" "}
                <img className="me-1"
                  src="https://lh3.googleusercontent.com/yfVMFmY5Cs_xR7PsZviISQrdgCndkE0ZfsWzNznjSlx6xDWGalCTIXenw5nwjug8zkMf7NqfpxfJg2YtQq73eiP2Z2s5Oq1Ll1Rm77Wh"
                  alt=""
                />
                {j.location}
              </p>
              <p className="flex">
                <img className="me-1"
                  src="https://lh3.googleusercontent.com/_rE0cS_0WENBmLUSx4fdNUdq94ioHVs5rXaIw9IVnTR7KF6FQlfU-SkeabXu0IslWxyW5d45ZKO76L9pROkt9LeLO49U9FWKTT4-N4vq"
                  alt=""
                />
                {j.salary}
              </p>
            </div>
          </div>
          {/* ------------------------------- */}
          <div className="">
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
      ))}
    </div>
  );
};

export default ShowAppliedJobs;
