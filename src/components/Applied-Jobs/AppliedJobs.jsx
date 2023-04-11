import React from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../utilities/fakedb";
import ShowAppliedJobs from "./ShowAppliedJobs";

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();
  const jobApplied = appliedJobs.jobs;
  const localStoragefakeDBid = getShoppingCart();

  const appliedJobes = Object.keys(localStoragefakeDBid).map((key) => {
    const idAsNumber = parseInt(key);
    const showAppliedJobs = jobApplied.filter((job) => job.id === idAsNumber);
    return showAppliedJobs ;
  });

  return (
    <div>
      <h1>AppliedJobs</h1>
      
        
        {
          appliedJobes.map((job,idx) => <ShowAppliedJobs
           job={job}
           key={idx}
          ></ShowAppliedJobs>)
        }
      
    </div>
  );
};

export default AppliedJobs;
