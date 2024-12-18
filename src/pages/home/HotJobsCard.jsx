import { FaCheckCircle } from "react-icons/fa";
import { FaClockRotateLeft, FaLocationDot } from "react-icons/fa6";
import { MdFactCheck } from "react-icons/md";
import { Link } from "react-router-dom";


const HotJobsCard = ({job}) => {

    const {_id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo} = job;
   
    return (
        <div className="p-5 bg-blue-50 border-2 flex flex-col">
            <div className="flex space-x-2 items-center mb-5">
                <img className="w-16 object-cover" src={company_logo} alt="" />
                <div className="flex flex-col ">
                    <h3 className="text-lg font-semibold">{company}</h3>
                    <div className="flex items-center space-x-2 text-gray-400">
                    <FaLocationDot></FaLocationDot>
                    <p > {location}</p>
                    </div>
                </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <div className="flex space-x-5 mb-3">
                <div className="flex items-center space-x-1 text-gray-400">
                    <MdFactCheck></MdFactCheck>
                    <p>{jobType}</p>
                </div>
                <div className="flex items-center space-x-1 text-blue-400">
                    <FaCheckCircle></FaCheckCircle>
                    <p>{status}</p>
                </div>
            </div>
            <p className="text-base text-gray-400 mb-5">{description}</p>
            <div className="text-gray-500 mb-4" >
                <p className="mb-2 text-lg font-semibold text-black">Requirements:</p>
                {
                    requirements.map((require, idx) => <li key={idx}>{require}</li>)
                }
            </div>
             <p className="text-blue-500 mb-4 flex-grow"><strong>Salary:</strong> ${salaryRange.min} - ${salaryRange.max} {salaryRange.currency}</p>
             <Link to={`/jobs/${_id}`}><button className=" btn bg-blue-200 text-blue-600 font-semibold text-lg">Apply Now</button></Link>
        </div>
    );
};

export default HotJobsCard;