import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import JobCategoryList from '../Job-Category-List/JobCategoryList';
import Featured_Jobs from '../Featured Jobs/Featured_Jobs';


const SectionHome = () => {
    return (
      <div className="">
        <div className="colorbg-Linear md:py-20 py-5">
          <Header></Header>
        </div>
        <JobCategoryList></JobCategoryList>
        <Featured_Jobs></Featured_Jobs>
        
      </div>
    );
};

export default SectionHome;