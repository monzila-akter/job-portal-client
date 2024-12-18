import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const jobDetails = useLoaderData();
    const {
        _id, title, location, jobType, category, applicationDeadline,
        salaryRange, description, company, requirements, responsibilities,
        status, hr_email, hr_name, company_logo
    } = jobDetails;

   

    return (
        <div className="container mx-auto my-10 p-8 bg-blue-50 rounded-lg shadow-xl">
            <div className="flex items-center justify-between border-b-2 border-gray-300 pb-4 mb-8">
                <div className="flex items-center space-x-4">
                    {company_logo && <img src={company_logo} alt={`${company} logo`} className="h-16" />}
                    <div>
                        <h1 className="text-4xl font-semibold text-blue-500">{title}</h1>
                        <p className="text-lg text-gray-600">{company}</p>
                    </div>
                </div>
            </div>

            {/* Job Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-700">Location:</span>
                        <p className="text-gray-500">{location}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-700">Job Type:</span>
                        <p className="text-gray-500">{jobType}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-700">Category:</span>
                        <p className="text-gray-500">{category}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-700">Salary Range:</span>
                        <p className="text-gray-500">{salaryRange.min} - {salaryRange.max}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-700">Application Deadline:</span>
                        <p className="text-gray-500">{applicationDeadline}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-700">Status:</span>
                        <p className={`text-gray-500 ${status === "Open" ? "text-green-500" : "text-red-500"}`}>
                            {status}
                        </p>
                    </div>
                </div>

                {/* Job Description, Responsibilities, Requirements */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-blue-500">Job Description</h3>
                        <p className="text-gray-700">{description}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-blue-500">Responsibilities</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {responsibilities.map((resp, index) => (
                                <li key={index}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-blue-600">Requirements</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="mt-8 border-t-2 pt-6">
                <h3 className="text-2xl font-semibold text-blue-600">Contact Information</h3>
                <div className="flex items-center space-x-4">
                    <p className="text-gray-700">For more details or to inquire about this job, you can contact:</p>
                    <a
                        href={`mailto:${hr_email}`}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        {hr_name} - {hr_email}
                    </a>
                </div>
            </div>

            {/* Apply Now Button */}
            <div className="mt-8 flex justify-center">
                <Link to={`/jobApply/${_id}`}>
                <button
                    
                    className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
                >
                    Apply Now
                </button>
                </Link>
            </div>
        </div>
    );
};

export default JobDetails;
