import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Header from './components/Home/Header';
import SectionHome from './components/Home/SectionHome';
import ViewDetails from './components/View_Details/ViewDetails';

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
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
