import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faPause,
  faTimes,
  faCheck,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import parseJwt from "@/components/parsetoken"; // Assuming you have a parseJwt function
import { Text } from "@chakra-ui/react";

const JobApplicationStatusPage = () => {
  const [formData, setFormData] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState("");

  useEffect(() => {
    const fetchApplicationStatus = async () => {
      const token = localStorage.getItem("token");
      const tokenData = parseJwt(token);

      const email = tokenData.email; // Example email, replace with actual email variable

      try {
        const response = await fetch(
          `/api/appstatus?email=${encodeURIComponent(email)}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setApplicationStatus(data.formData.appstatus);
        setFormData(data);
        console.log(formData?.personalInfo?.name); // Example log, check console for output
      } catch (error) {
        console.error("Error fetching application status:", error);
      }
    };

    fetchApplicationStatus();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  const renderStatusText = () => {
    switch (applicationStatus) {
      case "inprogress":
        return <Text>In progress</Text>;
      case "received":
        return <Text>Received</Text>;
      case "rejected":
        return <Text>Rejected</Text>;
      case "accept":
        return <Text>Accepted</Text>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Status Bar */}
      <div className="w-full bg-white p-4 shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Application Status
        </h2>
        <div>
          <div className="flex flex-wrap items-center justify-center">
<div className="flex bg-gray-200 p-2 rounded-md w-full max-w-3xl items-center flex-wrap">
  <div className="flex justify-center items-center h-full">
    <div className="flex flex-col items-center">
      <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-green-500 flex items-center justify-center">
        <FontAwesomeIcon icon={faFileAlt} className="text-white w-4 h-4 sm:w-6 sm:h-6" />
      </div>
      <Text>Submitted</Text>
    </div>
  </div>
  <div className="flex-grow border-t-4 rounded-md border-green-500 mx-4 sm:mx-7" style={{ marginLeft: 0, marginRight:0 }}></div>

              <div className="flex justify-center items-center h-full">
              <div className="flex flex-col items-center">
                <div
                  className={`h-10 w-10 sm:h-14 sm:w-14 rounded-full ${
                    applicationStatus === "inprogress"
                      ? "bg-blue-500"
                      : "bg-green-500"
                  } flex items-center justify-center`}
                >
                  {["inprogress", "received", "accept"].includes(
                    applicationStatus
                  ) && (
                    <FontAwesomeIcon
                      icon={faEllipsisH}
                      className="text-white  w-4 h-4 sm:w-6 sm:h-6"
                    />
                  )}
                </div>    {applicationStatus === "inprogress" && renderStatusText()}
                  {applicationStatus === "received" && <Text>In Progress</Text>}
                  {applicationStatus === "accept" && <Text>In Progress</Text>}
                  </div></div>
              <div style={{ marginLeft: 0, marginRight:0 }}
                className={`flex-grow border-t-4 rounded-md ${
                  applicationStatus === "received"
                    ? "border-green-500"
                    : applicationStatus === "accept"
                    ? "border-green-500"
                    : "border-gray-300"
                } mx-4 sm:mx-7`}
              ></div>
               <div className="flex justify-center items-center h-full">
               <div className="flex flex-col items-center">
                <div 
                  className={`h-10 w-10 sm:h-14 sm:w-14 rounded-full ${
                    applicationStatus === "received"
                      ? "bg-blue-500"
                      : applicationStatus === "accept"
                      ? "bg-green-500"
                      : "bg-gray-300"
                  } flex items-center justify-center`}
                >
                  {["received", "accept"].includes(applicationStatus) && (
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-white w-4 h-4 sm:w-6 sm:h-6"
                    />
                  )}
                </div>      {applicationStatus === "accept" && <Text>Received</Text>}
                {applicationStatus === "received" && renderStatusText()}
              </div>
              </div>
              <div style={{ marginLeft: 0, marginRight:0 }}
                className={`flex-grow border-t-4 rounded-md ${
                  applicationStatus === "accept"
                    ? "border-green-500"
                    : "border-gray-300"
                } mx-4`}
              ></div>
                <div className="flex justify-center items-center h-full">
                <div className="flex flex-col items-center">
                <div
                  className={`h-10 w-10 sm:h-14 sm:w-14 rounded-full ${
                    applicationStatus === "accept"
                      ? "bg-green-500"
                      : "bg-gray-300"
                  } flex items-center justify-center`}
                >
                  {["accept"].includes(applicationStatus) && (
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-white w-4 h-4 sm:w-6 sm:h-6"
                    />
                  )}
                  {["rejected"].includes(applicationStatus) && (
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="text-white w-4 h-4 sm:w-6 sm:h-6"
                    />
                  )}
                </div>
                {applicationStatus === "accept" && renderStatusText()}
                {applicationStatus === "rejected" && renderStatusText()}
                </div>    </div>
            </div>
          </div>
  
     
           </div>    
      </div>
         <div className="bg-white p-4 md:p-8 shadow-md rounded-md mt-4">
        {formData && (
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/3 p-4 shadow-sm border mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">
                Personal Information
              </h3>
              <p>Name: {formData.formData.personalInfo.name}</p>
              <p>Email: {formData.formData.personalInfo.email}</p>
              <p>Gender: {formData.formData.personalInfo.gender}</p>
              <p>Date of Birth: {formData.formData.personalInfo.dob}</p>
              <p>Mobile: {formData.formData.personalInfo.mobile}</p>
              <p>CNIC: {formData.formData.personalInfo.cnic}</p>
              <p>City: {formData.formData.personalInfo.city}</p>
              <p>
                Languages: {formData.formData.personalInfo.languages.join(", ")}
              </p>
              <p>
                Permanent Address:{" "}
                {formData.formData.personalInfo.permanentaddress}
              </p>
              <p>
                Current Address: {formData.formData.personalInfo.currentaddress}
              </p>
              <p>
                Instagram Handle:{" "}
                {formData.formData.personalInfo.instagramhandle}
              </p>
              <p>
                LinkedIn Handle: {formData.formData.personalInfo.linkedinhandle}
              </p>
              <p>
                Are you a content creator?:{" "}
                {formData.formData.personalInfo.areyoucontentcreator}
              </p>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4 shadow-sm border mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p>Degree Name: {formData.formData.education.DegreeName}</p>
              <p>Institute Name: {formData.formData.education.InstituteName}</p>
              <p>Degree Level: {formData.formData.education.DegreeLevel}</p>
              <p>
                Degree Specialization:{" "}
                {formData.formData.education.DegreeSpecialization}
              </p>
              <p>
                Graduation Year: {formData.formData.education.Graduation_year}
              </p>
              <p>Result Type: {formData.formData.education.ResultType}</p>
              <p>Percentage: {formData.formData.education.percentage}</p>
              <p>CGPA: {formData.formData.education.CGPA}</p>
              <p>Out of: {formData.formData.education.Outof}</p>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4 shadow-sm border mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">
                Internship Preference
              </h3>
              <p>
                Preferred Function:{" "}
                {formData.formData.internshipPreference.preferredFunction}
              </p>
              <p>Mode: {formData.formData.internshipPreference.mode}</p>
              <p>Location: {formData.formData.internshipPreference.location}</p>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
              {formData.formData.workExperience.map((experience, index) => (
                <div key={index} className="mb-2">
                  <p>Position Held: {experience.PositionHeld}</p>
                  <p>Organization Name: {experience.OrganizationName}</p>
                  <p>From Date: {experience.FromDate}</p>
                  <p>To Date: {experience.ToDate}</p>
                  <p>
                    Presently Working:{" "}
                    {experience.PresentlyWorking ? "Yes" : "No"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplicationStatusPage;
