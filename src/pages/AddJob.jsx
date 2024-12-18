import React from 'react';
import UseAuth from '../hooks/UseAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {

    const {user} = UseAuth();
    const navigate = useNavigate();


    const handleAddJob = e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const {min, max, currency, ...newJob} = initialData;
        newJob.salaryRange = {min: Number(min), max: Number(max), currency};
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        // console.log(newJob)

     fetch('https://job-portal-server-neon-eight.vercel.app/jobs', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newJob)
     })
     .then(res => res.json())
     .then(data => {
        // console.log(data)
        if(data.insertedId){
             Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Job Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                
        }
     })

    }

    return (
        <div className='bg-blue-50 py-10 px-5 md:px-10 lg:px-14 my-8'>
            <h2 className='text-3xl font-bold text-blue-500 text-center mb-5'>Post A Job</h2>
            <form onSubmit={handleAddJob}>
                {/* title and location field */}
          <div className='flex flex-col md:flex-row md:space-x-5 mb-5'>
          <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text font-semibold">Job Title</span>
          </label>
          <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
        </div>
        {/* location field */}
        <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text font-semibold">Location</span>
          </label>
          <input type="text" name='location' placeholder="Location" className="input input-bordered" required />
        </div>
          </div>
                {/* company logo and category field */}
                <div className='flex flex-col md:flex-row md:space-x-5 mb-5'>
          <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text font-semibold">Company Logo URL</span>
          </label>
          <input type="url" name='company_logo' placeholder="Company Logo URL" className="input input-bordered" required />
        </div>
        {/* category field */}
        <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text font-semibold">Category</span>
          </label>
          <input type="text" name='category' placeholder="Category" className="input input-bordered" required />
        </div>
          </div>
                {/* application deadline and company field */}
                <div className='flex flex-col md:flex-row md:space-x-5 mb-5'>
          <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text font-semibold">Application Deadline</span>
          </label>
          <input type="date" name='deadline' placeholder="Application Deadline" className="input input-bordered" required />
        </div>
        {/* company name field */}
        <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text font-semibold">Company</span>
          </label>
          <input type="text" name='company' placeholder="Company" className="input input-bordered" required />
        </div>
          </div>
          {/* requirements */}
        <div className='mb-5'>
{/*job type field */}
<label className="form-control w-full">
  <div className="label">
    <span className="label-text font-semibold">Job Type</span>
  </div>
  <select name='jobType' className="select select-bordered">
    <option disabled selected>Job Type</option>
    <option>Remote</option>
    <option>Contractual</option>
    <option>Intern</option>
    <option>Hybrid</option>
    <option>Full Time</option>
    <option>Part Time</option>
  </select>
</label>
        </div>
        {/* salary range */}
        <div className='mb-5'>
            <h2 className='text-base font-semibold'>Salary Range</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
          <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Min</span>
          </label>
          <input type="text" name='min' placeholder="Min" className="input input-bordered" required />
        </div>
        {/* salary max field */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Max</span>
          </label>
          <input type="text" name='max' placeholder="Max" className="input input-bordered" required />
        </div>
        {/* currency field */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Currency</span>
          </label>
          <select name='currency' className="select select-bordered">
    <option disabled selected>Currency</option>
    <option>BDT</option>
    <option>USD</option>
    <option>INR</option>
  </select>
        </div>
          </div>
         {/* hr email  and hr name field */}
         <div className='flex flex-col md:flex-row md:space-x-5 mb-5'>
          <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text font-semibold">hr_email</span>
          </label>
          <input defaultValue={user?.email} type="email" name='hr_email' placeholder="hr_email" className="input input-bordered" required />
        </div>
        {/* hr name field */}
        <div className="form-control w-full md:w-1/2">
          <label className="label">
            <span className="label-text font-semibold">hr_name</span>
          </label>
          <input type="text" name='hr_name' placeholder="hr_name" className="input input-bordered" required />
        </div>
          </div>
             {/* requirements*/}
             <label className="form-control">
  <div className="label">
    <span className="label-text">Requirements</span>
  </div>
  <textarea name='requirements' className="textarea textarea-bordered h-24" placeholder="Requirements"></textarea>
</label>
          {/* Responsibilities */}
          <label className="form-control">
  <div className="label">
    <span className="label-text">Responsibilities</span>
  </div>
  <textarea name='responsibilities' className="textarea textarea-bordered h-24" placeholder="Responsibilities"></textarea>
</label>
           {/* description field */}
           <label className="form-control">
  <div className="label">
    <span className="label-text">Job Description</span>
  </div>
  <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
</label>
<button type='submit' className='btn w-full bg-blue-600 text-white text-lg font-semibold mt-7'>Add Job</button>
            </form>
        </div>
    );
};

export default AddJob;