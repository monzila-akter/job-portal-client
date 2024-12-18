import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../component/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplication from "../pages/MyApplication";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplications from "../component/ViewApplications";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <p>page is not found</p>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/signIn",
            element: <SignIn></SignIn>
        },
        {
            path: "/jobs/:id",
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://job-portal-server-neon-eight.vercel.app/jobs/${params.id}`)
        },
        {
            path: "/jobApply/:id",
            element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
            path: "/myApplication",
            element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {
            path: "/addJob",
            element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
            path: "/myPostedJobs",
            element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
            path: "/viewApplications/:job_id",
            element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
            loader: ({params}) => fetch(`https://job-portal-server-neon-eight.vercel.app/job-applications/jobs/${params.job_id}`)
        }
      ]
    },
  ]);

  export default router;