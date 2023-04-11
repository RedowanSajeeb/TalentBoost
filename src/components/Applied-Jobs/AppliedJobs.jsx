import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../utilities/fakedb";
import ShowAppliedJobs from "./ShowAppliedJobs";
import Banner from "../CommonBanar/Banner";
import Bannerrr from "../CommonBanar/Bannerrr";
import { Select, Option } from "@material-tailwind/react";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    fetch("featured-jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.jobs);
        setFilteredJobs(data.jobs);
      });
  }, []);

  const remoteOption = () => {
    const filtered = jobs.filter((job) => job.remote_or_onsite === "Remote");
    setFilteredJobs(filtered);
  };

  const onSiteOption = () => {
    const filtered = jobs.filter((job) => job.remote_or_onsite == "Onsite");
    setFilteredJobs(filtered);
  };

  const localStoragefakeDBid = getShoppingCart();

  const appliedJobes = Object.keys(localStoragefakeDBid).map((key) => {
    const idAsNumber = parseInt(key);
    const showAppliedJobs = filteredJobs.filter((job) => job.id === idAsNumber);
    return showAppliedJobs;
  });

  // -----------------------------------
  return (
    <div>
      <Bannerrr></Bannerrr>

      <div className="w-72 absolute right-96">
        <Select className="" label="Filter By">
          <Option onClick={() => remoteOption()}>remote option</Option>

          <Option onClick={() => onSiteOption()}>on-site option</Option>
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
