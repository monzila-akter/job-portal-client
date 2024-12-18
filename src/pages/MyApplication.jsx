import { useEffect, useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";


const MyApplication = () => {

  const {user} = UseAuth();
  const [jobs, setJobs] = useState();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // fetch(`https://job-portal-server-neon-eight.vercel.app/job-applications?email=${user.email}`)
    // .then(res => res.json())
    // .then(data => setJobs(data))

    // axios.get(`https://job-portal-server-neon-eight.vercel.app/job-applications?email=${user.email}`, {withCredentials: true})
    // .then(res => {
    //   console.log(res.data)
    //   setJobs(res.data)
    // })
 
    axiosSecure.get(`/job-applications?email=${user.email}`)
    .then(res => {
      // console.log(res.data)
      setJobs(res.data)
    })

  }, [user.email])

    return (
        <div>
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job Title</th>
        <th>Job Type</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        jobs?.map(job => <tr key={job._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={job.company_logo}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{job.company}</div>
                  <div className="text-sm opacity-50">{job.location}</div>
                </div>
              </div>
            </td>
            <td>
              <h2>{job.title}</h2>
              <p>{job.category}</p>
              
            </td>
            <td>{job.jobType}</td>
            <th>
              <button className="btn btn-ghost text-lg text-red-500"><FaTrashAlt></FaTrashAlt></button>
            </th>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyApplication;