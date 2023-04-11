import React from 'react';
import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom';
import Banner from '../CommonBanar/Banner';
import { Button } from "@material-tailwind/react";
import { addToDb } from '../utilities/fakedb';
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

const applyNowOnClick = (id)=>{
    addToDb(id)
    

}

    return (
      <>
        <Banner></Banner>
        <div className="side-container md:grid grid-cols-2 md:mt-32 ">
          <div>
            <h3>
              <span>Job Description:</span> {job_description}
            </h3>
            <h3>
              <span>Job Responsibility:</span> {job_responsibility}
            </h3>
            <h3>
              <span>Educational Requirements: </span> <br />{" "}
              {educational_requirements}
            </h3>
            <h3>
              <span>Experiences: </span> <br /> {experiences}
            </h3>
          </div>
          {/* Job Details-card */}
          <div className="md:w-96   md:ms-10 ">
            <div className="colorbg-Linear rounded-md py-7 px-7">
              <h2>Job Details</h2> <hr />
              <div>
                <img src="" alt="" />
                <h2>
                  <span>Salary : </span> {salary}
                </h2>
              </div>
              <div>
                <img src="" alt="" />
                <h2>
                  <span>Job Title : </span> {job_title}
                </h2>
              </div>
              <h2>Contact Information</h2> <hr />
              <div>
                <img src="" alt="" />
                <h2>
                  <span>Phone : {contact_information.phone}</span>
                </h2>
              </div>
              <div>
                <img src="" alt="" />
                <h2>
                  <span>Email : {contact_information.email}</span>
                </h2>
              </div>
              <div>
                <img src="" alt="" />
                <h2>
                  <span>Address : {location}</span>
                </h2>
              </div>
            </div>
            {/* bnt-------- */}
              <Button onClick={()=> applyNowOnClick(id) }
                variant="gradient"
                size="lg"
                className=" mb-5 mt-5 w-full btn-clr lg:inline-block"
              >
                <span className="font-style">Apply Now</span>
              </Button>
            
          </div>
        </div>
      </>
    );
};

export default ViewDetails;