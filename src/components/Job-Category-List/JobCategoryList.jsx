import React, { useEffect, useState } from 'react';
const JobCategoryList = () => {

    const [list, setLIst] = useState([]);
    useEffect(() => {
      fetch("category.json")
        .then((res) => res.json())
        .then((data) => setLIst(data.categories));
    }, []);
console.log(list);
    return (
      <div className="side-container md:mt-32 mt-10 mb-32">
        <h1 className="text-center mb-2 text-3xl font-bold">
          Job Category List
        </h1>
        <p className="text-center mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="md:flex  items-center justify-center justify-between mt-8">
          {list.map((categorie, idx) => (
            <div
              className="flex flex-col items-center justify-center card-style-short py-2 px-10"
              key={idx}
            >
              <img
                className="h-28 mt-8 "
                src={categorie.logo}
                alt=""
              />
              <h1>{categorie.name}</h1>
              <h4>Jobs Available {categorie.jobs_available}</h4>
            </div>
          ))}
        </div>
      </div>
    );
};

export default JobCategoryList;