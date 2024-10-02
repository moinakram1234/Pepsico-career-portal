import BaseLayout from '@/components/Baselayout';
import { BottomSection } from '@/components/export_libraries/exportlibrary';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaBuilding, FaLevelUpAlt, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const JobDetails = () => {
    const router = useRouter();
    const { id } = router.query; // Extract id from the URL query parameters
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            // Fetch job details when id is available
            const fetchJobDetails = async () => {
                try {
                    const res = await fetch(`/api/postjob?_id=${id}`);
                    const data = await res.json();
                    setJob(data);
                    setLoading(false);
                } catch (error) {
                    console.error('Failed to fetch job details:', error);
                    setLoading(false);
                }
            };

            fetchJobDetails();
        }
    }, [id]);
    const handleApp = (postId) => {
        // Store the post ID in localStorage
        localStorage.setItem('postId', postId);
        
        // Navigate to the login page
        router.push('/login');
      };
    if (loading) {
        return (
            <BaseLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-xl text-blue-500">Loading job details...</p>
            </div>
            </BaseLayout>
        );
    }

    if (!job) {
        return (
          <BaseLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-xl text-red-500">Job not found or failed to load.</p>
            </div></BaseLayout>
        );
    }

    return (
        <BaseLayout>
     <div  className=' h-[100vh]'>
     <h1 className="text-3xl font-bold  mt-20 bg-[#2E3192]  text-white p-5 col-span-1">{job.jobTitle}</h1>
     <div className="w-full bg-[#F4F4F4] p-5 lg:grid lg:grid-cols-3 pl-5 pr-5 ">
   
    
    <div className="mb-4 flex items-center col-span-1">
      <FaBriefcase className="inline mr-2" title="Job Type" />
      <h2 className="font-medium">Job Type: </h2> <span className="text-gray-700 ml-2">{job.jobType}</span>
    </div>
    

    
    <div className="mb-4 flex items-center col-span-1">
      <FaLevelUpAlt className="inline mr-2" title="Experience Level" />
      <strong>Experience Level:</strong> <span className="text-gray-700 ml-2">{job.experienceLevel}</span>
    </div>
    
    <div className="mb-4 flex items-center col-span-1">
      <FaBuilding className="inline mr-2" title="Department" />
      <strong>Department:</strong> <span className="text-gray-700 ml-2">{job.department}</span>
    </div>
    
    <div className="mb-4 flex items-center col-span-1">
      <FaCalendarAlt className="inline mr-2" title="Submission Deadline" />
      <strong>Submission Deadline:</strong> <span className="text-red-500 ml-2">{new Date(job.submissionDeadline).toLocaleDateString()}</span>
    </div>
    <div className="mb-4 flex items-center   col-span-2">
      <FaMapMarkerAlt className="inline mr-2" title="Job Location" />
      <h2 className="font-medium">Location: </h2>  <span className="text-gray-700 ml-2">{job.jobLocation}</span> 
    </div>
    </div>
    <p className="text-gray-600 pl-5 mt-4 mb-6 " dangerouslySetInnerHTML={{ __html: job.description }}></p>
    
    <div className="fixed bottom-4 right-4">
      <button 
        className="bg-[#2E3192] p-1 w-36 rounded-lg hover:scale-110 hover:bg-green-500 text-white transition-transform duration-200"
        onClick={() => handleApp(job._id)}
      >
        Apply Now
      </button>
    
  </div>
     </div>
            <BottomSection bg={"#F4F4F4"} />
        </BaseLayout>
    );
};

export default JobDetails;
