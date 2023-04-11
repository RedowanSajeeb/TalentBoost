import React, { useEffect, useState } from 'react';
import Jobs_card from './Jobs_card';
import {
  Button
} from "@material-tailwind/react";
const Featured_Jobs = () => {
       const [jobs, setJobs] = useState([]);
       useEffect(() => {
         fetch("featured-jobs.json")
           .then((res) => res.json())
           .then((data) => setJobs(data.jobs.slice(0, 4)));
       }, []);

/* ---see-morebnt-data-load
 */
const seeAllJobsButton =() =>{
    fetch("featured-jobs.json")
    .then(res => res.json())
    .then(data => setJobs(data.jobs));
}


    return (
      <div className="side-container">
        <h1 className="text-center mb-2 text-3xl font-bold">Featured Jobs</h1>
        <h6 className="text-center mb-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </h6>
        {/* ------------------- */}
        <div className="md:grid grid-cols-2 mb-10">
          {jobs.map((job) => (
            <Jobs_card job={job} key={job.id}></Jobs_card>
          ))}
        </div>
        <h1 className="mb-10 text-center">
          <Button
            onClick={() => seeAllJobsButton()}
            variant="gradient"
            size="lg"
            className=" btn-clr lg:inline-block"
          >
            <span className="font-style">See All Jobs</span>
          </Button>
        </h1>
      </div>
    );
};

export default Featured_Jobs;