import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from '../CommonBanar/Banner';

const ViewDetails = () => {
 const featuredJobs = useLoaderData();
const job = featuredJobs.jobs
//  console.log(job);
// ----------
 const {id} = useParams() 
 const idAsNumber = parseInt(id);
  const result = job.find((job) => job.id === idAsNumber);
//   -------
const {
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
} = result;
    return (
      <div className="side-container">
        <Banner></Banner>
        <h1>{job_title}</h1>
      </div>
    );
};

export default ViewDetails;