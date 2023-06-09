import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Header from './components/Home/Header';
import SectionHome from './components/Home/SectionHome';
import ViewDetails from './components/View_Details/ViewDetails';
import AppliedJobs from './components/Applied-Jobs/AppliedJobs';
import AssinStatistics from './components/Statistics/AssinStatistics';
import FaqComponent from './components/FaqComponent/FaqComponent';
import Not404 from './components/NOT404/Not404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <SectionHome></SectionHome>,
      },
      {
        path: `/ViewDetails/:id`,
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`/featured-jobs.json`),
      },
      {
        path: "/AppliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        // loader: ({ params }) => fetch(`/featured-jobs.json`),
      },
      {
        path: "/Statistics",
        element: <AssinStatistics></AssinStatistics>,
      },
      {
        path: "Blog",
        element: <FaqComponent></FaqComponent>,
      },
      {
        path:"*",
        element:<Not404></Not404>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
