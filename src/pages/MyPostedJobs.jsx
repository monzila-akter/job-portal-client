import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { Link } from "react-router-dom";


const MyPostedJobs = () => {

 const {user} = UseAuth();
 const [jobs, setJobs] = useState();

 useEffect(() => {
    fetch(`https://job-portal-server-neon-eight.vercel.app/jobs?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setJobs(data))
 }, [user.email])

    return (
        <div>
            <h2>Posted jobs </h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Application Deadline</th>
        <th>Application Count</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        jobs?.map((job, idx) =>   <tr key={job._id}>
        <th>{idx + 1}</th>
        <td>{job.title}</td>
        <td>{job.deadline}</td>
        <td>{job.applicationCount}</td>
        <td>
            <Link to={`/viewApplications/${job._id}`}>
            <button className="btn bg-blue-500 text-white font-semibold">View Applications</button>
            </Link>
        </td>
      </tr>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJobs;