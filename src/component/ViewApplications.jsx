import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ViewApplications = () => {

    const applications = useLoaderData();
    
    const handleStatusUpdate = (e, id) => {
        // console.log(e, id)
        const data = {
            status: e.target.value
        }

        fetch(`https://job-portal-server-neon-eight.vercel.app/job-applications/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Status Updated Successfully",
                        showConfirmButton: false,
                         timer: 1500
                         });
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>email</th>
        <th>Status</th>
        <th>Update Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        applications?.map((app, idx) =>  <tr key={app._id}>
        <th>{idx + 1}</th>
        <td>{app.applicant_email}</td>
        <td>Quality Control Specialist</td>
        <td>
        <select
        onChange={(e) => handleStatusUpdate(e, app._id)}
        defaultValue={app.status || 'Change Status'}
         className="select select-bordered select-xs w-full max-w-xs">
  <option disabled>Change Status</option>
  <option>Set Interview</option>
  <option>Under Review</option>
  <option>Hired</option>
  <option>Rejected</option>
</select>
        </td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ViewApplications;