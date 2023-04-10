import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import JobCategoryList from '../Job-Category-List/JobCategoryList';

const SectionHome = () => {
    return (
      <div className="">
        <div className="colorbg-Linear md:py-20 py-5">
          <Header></Header>
        </div>

        <JobCategoryList></JobCategoryList>
      </div>
    );
};

export default SectionHome;