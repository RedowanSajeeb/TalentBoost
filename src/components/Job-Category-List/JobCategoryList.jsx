import React, { useEffect, useState } from 'react';
const JobCategoryList = () => {

    const [list, setLIst] = useState([]);
    useEffect(() => {
      fetch("category.json")
        .then((res) => res.json())
        .then((data) => setLIst(data.categories));
    }, []);
// console.log(list);
    return (
      <div className="side-container ms-5 me-3 md:mt-32 mt-10 mb-16 md:mb-32">
        <h1 className="text-center mb-2 text-5xl	 font-bold">
          Job Category List
        </h1>
        <p className="text-center text-base mb-10 dark-color">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="md:flex  items-center  justify-between mt-8">
          {list.map((categorie, idx) => (
            <div
              className=" flex flex-col items-center  me-5 justify-center  hover:bg-indigo-50 card-style-short pb-5 py-3 px-10 "
              key={idx}
            >
              <img
                className="h-36 mt-8 short-cart py-3 mb-5 px-3"
                src={categorie.logo}
                alt=""
              />
              <h1 className="font-bold text-lg">{categorie.name}</h1>
              <h4 className="dark-color text-base	">
                Jobs Available {categorie.jobs_available}
              </h4>
            </div>
          ))}
        </div>
      </div>
    );
};

export default JobCategoryList;