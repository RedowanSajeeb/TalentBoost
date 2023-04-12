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
              <h2 className="text-xl font-bold mb-6">Job Details</h2>
              <hr className="border border-indigo-100" />
              <div className="mt-6">
                <img src="" alt="" />
                <h2 className="mb-3 flex items-center">
                  <img
                    src="https://lh3.googleusercontent.com/_rE0cS_0WENBmLUSx4fdNUdq94ioHVs5rXaIw9IVnTR7KF6FQlfU-SkeabXu0IslWxyW5d45ZKO76L9pROkt9LeLO49U9FWKTT4-N4vq"
                    alt=""
                  />
                  <span className="text-base ms-2 font-black">Salary: </span>{" "}
                  <span className="dark-color ms-1 "> {salary}</span>
                </h2>
              </div>
              <div>
                <img src="" alt="" />
                <h2 className="mb-3 flex items-center">
                  <img
                    src="https://lh3.googleusercontent.com/46YZ5Ftk52sLjJcvNScNaQxbWliegb4vtqoSFEPrTxsRJic-2CUGTIi8JOP2DacTkwOSkKakxvlSGL3uUxL5DtvwE7Gz_FoFak0qDoJbPg"
                    alt=""
                  />
                  <span className="text-base ms-2 font-black">
                    Job Title :{" "}
                  </span>
                  <span className="dark-color ms-1">{job_title}</span>
                </h2>
              </div>
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              <hr className="border border-indigo-100" />
              <div className="mt-6">
                <img src="" alt="" />
                <h2 className="mb-3 flex items-center">
                  <img
                    src="https://lh3.googleusercontent.com/dX3c35sNmBjAMAidCL6g6EBIX5MUvd2ceLUkmF1mM-a59NQdXqAn5xYnzg3ek5xPG36EPWkNymp1HyZ_jyhPk1zUedu_dmVmcNDKESFL"
                    alt=""
                  />
                  <span className="text-base ms-2 font-black">
                    Phone :
                    <span className="dark-color ms-1">
                      {contact_information.phone}
                    </span>
                  </span>
                </h2>
              </div>
              <div>
                <img src="" alt="" />
                <h2 className="mb-3 flex items-center">
                  <img
                    src="https://lh3.googleusercontent.com/2WD_9ePh-HzS_Z7M_oXNgloimRKacGZHYZboQ_MrNTlzfUwzoWpAkdnnWnXZeG1Ur4KP_9S38MHfdb91tjBnxZW8JWMq5oVNLNNMDXKHRg"
                    alt=""
                  />
                  <span className="text-base font-black ms-2">
                    Email :
                    <span className="dark-color ms-1">
                      {contact_information.email}
                    </span>
                  </span>
                </h2>
              </div>
              <div>
                <img src="" alt="" />
                <h2 className="mb-3 flex items-center">
                  <img
                    src="https://lh3.googleusercontent.com/kj_HaPv7l5dfzzEeW5JYiP3DHmZCfc3TAD5DkYz0ChmqWr5cgkCcdK0QtYpYY8XjTRmxfSKRi-qq7NS682GFXs6-gtkXQleGTKvEer2D"
                    alt=""
                  />
                  <span span className="text-base font-black ms-2">
                    Address : <span className="dark-color ms-1">{location}</span>
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