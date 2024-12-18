import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";


const HotJobs = () => {

    const [jobs, setJobs] = useState();

    useEffect(() => {
        fetch("https://job-portal-server-neon-eight.vercel.app/jobs")
        .then(res => res.json())
        .then(data => {
            setJobs(data);
        })
    }, [])

    return (
        <div>
            <h2 className="text-4xl text-blue-500 font-bold mb-4 text-center">Jobs of the day</h2>
            <p className="text-base mb-10 text-gray-600 text-center">Search and connect with the right candidates faster.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    jobs?.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;