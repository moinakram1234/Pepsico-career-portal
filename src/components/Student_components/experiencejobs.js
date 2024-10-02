import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { fetchJobPosts } from "@/server_requests/client_requests";
import AirbnbCard from "./cards";

export default function JobsCard() {
  const [jobPosts, setJobPosts] = useState([]);
  const router = useRouter();
  const { data: session } = useSession();
  const [usertoken, setUsertoken] = useState(null);
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedJobLocation, setSelectedJobLocation] = useState("");
  const [selectedJobDate, setSelectedJobDate] = useState("");
  const [searchInput, setSearchInput] = useState(router.query.role || "");

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // setUsertoken(token);

    // if (!session) {
    //   if (!token) {
    //     router.push("/");
    //   }
    //   if (isTokenExpired(token)) {
    //     localStorage.removeItem("token");
    //     router.push("/");
    //   }
    // }
const fetchData = async () => {
  try {
    const data = await fetchJobPosts();
       const filteredData = data.filter((jobPost) => jobPost.enable === true && jobPost.experienceLevel === 'Student');

    await Promise.all(data.map(async (jobPost) => {
      const deadlineDate = new Date(jobPost.submissionDeadline);
      const currentDate = new Date();

      if (deadlineDate < currentDate && jobPost.enable === true) {
        // If the deadline has passed, update the enable status
        await updateEnableStatus(jobPost._id, false);
      }
    }));

    setJobPosts(filteredData);
  } catch (error) {
    console.error("Error fetching job posts:", error);
  }
};
    fetchData();
  }, [usertoken, session]);

  const handleApplyNow = (id) => {
    router.push(`/applyapplication?postid=${id}`);
  };

  const handleApp = (postId) => {
    router.push(`/jobdetails?postid=${postId}`);
  };

  const handleJobTypeChange = (event) => {
    setSelectedJobType(event.target.value);
  };

  const handleJobLocationChange = (event) => {
    setSelectedJobLocation(event.target.value);
  };

  const handleJobDateChange = (event) => {
    setSelectedJobDate(event.target.value);
  };

  const sizes = [
    { type: "Job Type", value: selectedJobType },
    { type: "Job Location", value: selectedJobLocation },
    { type: "Job Date", value: selectedJobDate },
  ];

  const handleRemoveTag = (indexToRemove) => {
    switch (indexToRemove) {
      case "Job Type":
        setSelectedJobType("");
        break;
      case "Job Location":
        setSelectedJobLocation("");
        break;
      case "Job Date":
        setSelectedJobDate("");
        break;
      case "clearall":
        setSelectedJobDate("");
        setSelectedJobLocation("");
        setSelectedJobType("");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <AirbnbCard jobPosts={jobPosts} />
    </div>
  );
}
