import React from "react";

const ShowAppliedJobs = ({ job }) => {
  return (
    <div>
      {job.map((j) => (
        <div key={j.id}>
          <img className="h-10" src={j.company_logo} alt="Company logo" />
          <h1>{j.job_title}</h1>
          <h2>{j.company_name}</h2>
          <p>Location: {j.location}</p>
          <p>Remote or Onsite: {j.remote_or_onsite}</p>
          <p>Full-time or Part-time: {j.fulltime_or_parttime}</p>
          <p>Salary: {j.salary}</p>
          <p>Job Description: {j.job_description}</p>
          <p>Job Responsibility: {j.job_responsibility}</p>
          <p>Educational Requirements: {j.educational_requirements}</p>
          <p>Experience: {j.experiences}</p>
          {/* <p>Contact Information: {j.contact_information}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ShowAppliedJobs;
