import React from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../utilities/fakedb";
import ShowAppliedJobs from "./ShowAppliedJobs";
import Banner from "../CommonBanar/Banner";
import Bannerrr from "../CommonBanar/Bannerrr";
import { Select, Option } from "@material-tailwind/react";

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();
  const jobApplied = appliedJobs.jobs;
  const localStoragefakeDBid = getShoppingCart();

  const appliedJobes = Object.keys(localStoragefakeDBid).map((key) => {
    const idAsNumber = parseInt(key);
    const showAppliedJobs = jobApplied.filter((job) => job.id === idAsNumber);
    return showAppliedJobs;
  });

  return (
    <div>
      <Bannerrr></Bannerrr>

      <div className="w-72 absolute right-96">
        <Select className="" label="Filter By">
          <button className="ms-2 me-3">
            <Option>remote option</Option>
          </button>
          <button className="mt-3">
            <Option>on-site option</Option>
          </button>
        </Select>
      </div>
      <div className="md:mt-36 mb-10">
        {appliedJobes.map((job, idx) => (
          <ShowAppliedJobs job={job} key={idx}></ShowAppliedJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
