import React, { useEffect, useState } from 'react';
import Jobs_card from './Jobs_card';

const Featured_Jobs = () => {


       const [jobs, setJobs] = useState([]);
       useEffect(() => {
         fetch("featured-jobs.json")
           .then((res) => res.json())
           .then((data) => setJobs(data.jobs));
       }, []);

console.log(jobs);
    return (
      <div className="side-container">
        <h1 className="text-center mb-2 text-3xl font-bold">Featured Jobs</h1>
        <h6 className="text-center mb-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </h6>
        {/* ------------------- */}
        {
        
        jobs.map((job) => <Jobs_card
        job={job}
        key={job.id}
        ></Jobs_card>)
        
        
        
        }
      </div>
    );
};

export default Featured_Jobs;