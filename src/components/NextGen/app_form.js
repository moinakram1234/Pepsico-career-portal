import React, { useEffect, useState } from "react";
import AccessibilityInformation from "./formsteps/AccessibilityInformation";
import PersonalInformation from "./formsteps/PersonalInformation";
import EducationInformation from "./formsteps/EducationInformation";
import WorkExperience from "./formsteps/WorkExperience";
import InternshipPreference from "./formsteps/InternshipPreference";
import Preview from "./formsteps/Preview";
import parseJwt from "../parsetoken";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./mto.module.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader";
import { useRouter } from "next/router";
import {
  validateEducation,
  validateEducation2,
  validateFile,
  validateFileDetails,
  validateInternshipPreference,
  validatePersonalInfo,
  validateworkexperience,
} from "./formvalidator";

const steps = [
  { label: "Personal Information", number: 1 },
  { label: "Education Information", number: 2 },
  { label: "Work Experience", number: 3 },
  { label: "Preferred Function", number: 4 },
  { label: "Preview", number: 5 },
];

const Form = ({ email }) => {
  React.useEffect(() => {
    const PId = localStorage.getItem("postId") || ""; // Retrieve postId from localStorag
    setPostId(PId);
   
    AOS.init({ duration: 2000 });
  }, []);

  const router = useRouter();

  const [step, setStep] = useState(1);
  const [errorlist, setErrorlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [postId, setPostId] = useState("");
  const [formData, setFormData] = useState({
    Useremail: email,
    personalInfo: {
      name: "",
      gender: "",
      dob: "",
      email: "",
      mobile: "",
      cnic: "",
      city: "",
      languages: [],
      permanentaddress: "",
      currentaddress: "",

      linkedinhandle: "",
    },
    postid: postId,
    education: [],
    newEducation: {
      DegreeName: "",
      InstituteName: "",
      DegreeSpecialization: [],
      Graduation_year: "",
      CGPA: 0,
    },
    internshipPreference: {
      preferredFunction: "",
      location: "",
    },
    hasWorkExperience: "",
    workExperience: [],
    newExperience: {
      PositionHeld: "",
      OrganizationName: "",
      FromDate: "",
      ToDate: "",
      PresentlyWorking: false,
    },
  });

  const nextStep = () => {
    let isValid = true;

    switch (step) {
      case 1:
        const { errors, checker } = validatePersonalInfo(formData.personalInfo, file);
          setErrorlist(errors);
          isValid = checker;
        break;
      case 2:
        isValid = validateEducation(formData);
        break;
      case 3:
        if (
          formData.hasWorkExperience === "Yes" &&
          formData.workExperience.length === 0
        ) {
          toast.error("At least one work experience entry is required.");
          isValid = false;
        }
        // Add case for work experience validation
        break;
      case 4:
        const { preerrors, prefchecker } = validateInternshipPreference(
          formData.internshipPreference
        );
        setErrorlist(preerrors);
        isValid = prefchecker;
        // Add case for internship preference validation
        break;
      // Add cases for other steps with their respective validations
      // For example, case 2 could validate education information, etc.
    }

    if (!isValid) {
      return; // Stop navigating if current step is not valid
    }

    if (step < 5) {
      setStep(step + 1); // Proceed to the next step
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInformation
            formData={formData.personalInfo}
            handleChange={handlePersonalInfoChange}
            errorlist={errorlist}
            handleFileChange={handleFileChange}
          />
        );
      case 2:
        return (
          <EducationInformation
            formData={formData}
            handleChange={handleEducationChange}
            addEducation={addEducation}
            deleteEducation={deleteEducation} // Pass deleteEducation as a prop
            errorlist={errorlist}
          />
        );
      case 3:
        return (
          <WorkExperience
            formData={formData}
            handleChange={handleWorkExperienceChange}
            addWorkExperience={addWorkExperience}
            deleteexperience={deleteexperience}
            errorlist={errorlist}
          />
        );
      case 4:
        return (
          <InternshipPreference
            formData={formData.internshipPreference}
            handleChange={handleInternshipPreferenceChange}
            errorlist={errorlist}
          />
        );
      case 5:
        return <Preview formData={formData} />;
      default:
        return null;
    }
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFormData((prev) => ({
      ...prev,
      postid: postId
    }));
  };
  const handleSubmit = async (e) => {
 
    e.preventDefault();
    
    setLoading(true);
    try {
 
 
      const formPayload = new FormData();
      formPayload.append("file", file);
      formPayload.append("data", JSON.stringify(formData));
    console.log(formData)
      const response = await fetch("/api/nextgensubmission", {
        method: "POST",
        body: formPayload,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      if (data.message != "Application already submitted.") {
        sendEmail();
      }

      if (data.message === "Form data saved successfully") {
        router.push("/career-portal/applicationstatus");
      } else {
        router.push("/career-portal/applicationstatus");
        toast(data.message);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      toast.error("Error submitting form data");
    }
  };
  const deleteEducation = (index) => {
    setFormData((prev) => {
      const updatedEducation = [...prev.education];
      updatedEducation.splice(index, 1);
      return { ...prev, education: updatedEducation };
    });
  };
  const deleteexperience = (index) => {
    setFormData((prev) => {
      const updatedEducation = [...prev.workExperience];
      updatedEducation.splice(index, 1);
      return { ...prev, workExperience: updatedEducation };
    });
  };
  const handleAccessibilityChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      accessibility: {
        ...prev.accessibility,
        [name]: value,
      },
    }));
  };
  const sendEmail = async () => {
    try {
      // Get token data from localStorage
      const tokenData = localStorage.getItem("token");
      if (!tokenData) {
        throw new Error("Token not found in localStorage");
      }

      // Parse token data to get email
      const { email } = parseJwt(tokenData);

      // Example API endpoint URL (replace with your actual endpoint)
      const apiUrl = "/api/send-email";

      // Example POST request to send email
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Replace 'YOUR_AUTH_TOKEN' with your actual authentication token mechanism
          Authorization: `Bearer YOUR_AUTH_TOKEN`,
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Check if the input field is for CNIC
    if (name === "cnic") {
      // Remove all non-digit characters for processing
      const digits = value.replace(/\D/g, "");

      // Format the digits based on the CNIC pattern XXXXX-XXXXXXX-X
      if (digits.length <= 5) {
        formattedValue = digits;
      } else if (digits.length > 5 && digits.length <= 12) {
        formattedValue = `${digits.slice(0, 5)}-${digits.slice(5)}`;
      } else if (digits.length > 12) {
        formattedValue = `${digits.slice(0, 5)}-${digits.slice(
          5,
          12
        )}-${digits.slice(12, 13)}`;
      }
      setFormData((prev) => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          [name]: formattedValue,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          [name]: value,
        },
      }));
    }
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      newEducation: {
        ...prev.newEducation,
        [name]: value,
      },
    }));
  };

  const addEducation = () => {
    let isValid = true;
    const { errors, checker } = validateEducation2(formData);
    setErrorlist(errors);
    isValid = checker;
    if (!isValid) {
      return; // Stop navigating if current step is not valid
    }
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, prev.newEducation],
      newEducation: {
        DegreeName: "",
        InstituteName: "",
        DegreeLevel: "",
        DegreeSpecialization: [],
        Graduation_year: "",
        ResultType: "",

        CGPA: "",
      },
    }));
  };

  const handleWorkExperienceChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;
    if (name === "hasWorkExperience") {
      setFormData((prev) => ({
        ...prev,
        hasWorkExperience: updatedValue,
      }));
      return;
    } else {
      setFormData((prev) => ({
        ...prev,
        newExperience: {
          ...prev.newExperience,
          [name]: updatedValue,
        },
      }));
    }
  };

  const addWorkExperience = () => {
    let isValid = true;
    const { errors, checker } = validateworkexperience(formData);
    setErrorlist(errors);
    isValid = checker;
    if (!isValid) {
      return; // Stop navigating if current step is not valid
    }
    setFormData((prev) => ({
      ...prev,
      workExperience: [...prev.workExperience, prev.newExperience],
      newExperience: {
        PositionHeld: "",
        OrganizationName: "",
        FromDate: "",
        ToDate: "",
        PresentlyWorking: false,
      },
    }));
  };

  const handleInternshipPreferenceChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      internshipPreference: {
        ...prev.internshipPreference,
        [name]: value,
      },
    }));
  };

  return (
       <div       className="w-full max-w-4xl border p-8 bg-white border-gray-300 min-h-screen mx-auto md:p-6 shadow-lg">
            <div className="flex justify-between p-2 z-20 items-center bg-[#EBEEF9] border border-gray-300 rounded-lg mb-4 pr-20">
     <div className="flex">
     <div className=" w-16  h-16 flex  ">
          <img src="/logo.png" alt="Logo" className="w-44 lg:w-96" />
         
        </div> 
        <div className=" inset-x-0 bottom-0  text-gray-600 font-bold text-center p-4">
          Haidri Beverages Pvt Ltd.
        </div>
     </div>
        <div className="flex items-center">
          <h1 className="text-2xl font-spartan ">Application Form</h1>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {steps.map((stepLabel, index) => (
          <div
            key={index}
            className={`p-2 font-spartan text-lg md:p-5 z-20 border rounded-lg flex justify-center items-center text-center ${
              step === index + 1 ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {stepLabel.label}
          </div>
        ))}
      </div>
      {
        loading ? (
             <div className="fixed inset-0 bg-[#05132cda] flex z-50 justify-center items-center">
          <span className={`${styles.loader}`} />
        </div>
        ) :
        <>
          <div>{renderStep()}</div>
          <div className="mt-4 flex justify-between">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-[#000000] font-spartan  text-white p-2 rounded"
              >
                Previous
              </button>
            )}
            {step < 5 && (
              <button
                onClick={nextStep}
                className="bg-[#E7A956] font-spartan  text-white p-2 rounded"
              >
                Save & Next
              </button>
            )}
            {step === 5 && (
              <button
                onClick={handleSubmit}
                className="bg-[#E7A956] font-spartan  text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            )}
          </div>
        </>
      }
      <ToastContainer />
    
    </div>
  );
};

export default Form;
