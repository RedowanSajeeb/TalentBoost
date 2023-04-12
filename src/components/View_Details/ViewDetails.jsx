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
        <div className="side-container ms-5 me-3 mt-5 md:grid grid-cols-2 md:mt-32 ">
          <div>
            <h3 className="mb-6">
              <span className="font-black text-base">Job Description:</span>{" "}
              <span className="dark-color"> {job_description}</span>
            </h3>
            <h3 className="mb-6">
              <span className="font-black text-base">Job Responsibility:</span>{" "}
              <span className="dark-color">{job_responsibility}</span>
            </h3>
            <h3 className="mb-6">
              <span className="font-black text-base">
                Educational Requirements:{" "}
              </span>{" "}
              <br />{" "}
              <span className="dark-color">{educational_requirements}</span>
            </h3>
            <h3 className="mb-6">
              <span className="font-black text-base">Experiences: </span> <br />{" "}
              <span className="dark-color">{experiences}</span>
            </h3>
          </div>
          {/* Job Details-card */}
          <div className="md:w-96 mt-5  md:ms-10 ">
            <div className="colorbg-Linear rounded-md py-7 px-7">
              <h2 className="text-xl font-bold mb-6">Job Details</h2>{" "}
              <hr className='border border-indigo-100' />
              <div className="mt-6">
                <img src="" alt="" />
                <h2 className="mb-3">
                  <span className="text-base font-black">Salary : </span>{" "}
                  <span className="dark-color">{salary}</span>
                </h2>
              </div>
              <div>
                <img src="" alt="" />
                <h2 className="mb-3">
                  <span className="text-base font-black">Job Title : </span>{" "}
                  <span className="dark-color">{job_title}</span>
                </h2>
              </div>
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>{" "}
              <hr className="border border-indigo-100" />
              <div className="mt-6">
                <img src="" alt="" />
                <h2 className="mb-3">
                  <span className="text-base font-black">
                    Phone :{" "}
                    <span className="dark-color">
                      {contact_information.phone}
                    </span>
                  </span>
                </h2>
              </div>
              <div>
                <img src="" alt="" />
                <h2 className="mb-3">
                  <span className="text-base font-black">
                    Email :{" "}
                    <span className="dark-color">
                      {contact_information.email}
                    </span>
                  </span>
                </h2>
              </div>
              <div>
                <img src="" alt="" />
                <h2 className="mb-3">
                  <span span className="text-base font-black">
                    Address : <span className="dark-color">{location}</span>
                  </span>
                </h2>
              </div>
            </div>
            {/* bnt-------- */}
            <Button
              onClick={() => applyNowOnClick(id)}
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