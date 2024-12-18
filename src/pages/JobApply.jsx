import Lottie from "lottie-react";
import lottie from "../assets/lottieFiles/application.json"
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {

  const {id} = useParams();
  const {user} = UseAuth();
  const navigate = useNavigate();

  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log(linkedIn, github, resume);

   const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume
   }

   fetch('https://job-portal-server-neon-eight.vercel.app/job-applications', {
     method: "POST",
     headers: {
      'content-type': 'application/json'
     },
     body: JSON.stringify(jobApplication)
   })
   .then(res => res.json())
   .then(data => {
    // console.log(data)
    if(data.insertedId){
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Job Applied Successfully",
        showConfirmButton: false,
        timer: 1500
      });
    navigate("/myApplication")
    }
   })

  }

    return (
        <div className="hero bg-blue-100 my-10 py-10 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96 md:ml-20">
          <Lottie animationData={lottie}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleJobApply} className="card-body">
            <h1 className="text-4xl font-bold text-blue-500">Apply now!</h1>
            {/* linkedIn url field */}
              <div className="form-control">
                  
                <label className="label">
                  <span className="label-text">LinkedIn URL</span>
                </label>
                <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
              </div>
              {/* github url field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Github URL</span>
                </label>
                <input type="url" name="github" placeholder="Github URl" className="input input-bordered" required />
               
              </div>
                {/* Resume url field */}
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Github URL</span>
                </label>
                <input type="url" name="resume" placeholder="Resume URl" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-2">
                <button className="btn bg-blue-500  text-lg font-semibold text-white">Apply Now</button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    );
};

export default JobApply;