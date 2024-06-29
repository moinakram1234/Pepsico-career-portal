import React, { useState } from "react";
import AccessibilityInformation from "./formsteps/AccessibilityInformation";
import PersonalInformation from "./formsteps/PersonalInformation";
import EducationInformation from "./formsteps/EducationInformation";
import WorkExperience from "./formsteps/WorkExperience";
import InternshipPreference from "./formsteps/InternshipPreference";
import Preview from "./formsteps/Preview";
import parseJwt from "../parsetoken";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../loader";
import { useRouter } from "next/router";

const steps = [
  { label: "Personal Information", number: 1 },
  { label: "Education Information", number: 2 },
  { label: "Work Experience", number: 3 },
  { label: "Internship Preference", number: 4 },
  { label: "Preview", number: 5 },
];

const Form = ({ email }) => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
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
      instagramhandle: "",
      linkedinhandle: "",
      areyoucontentcreator: "",
    },
    education: [],
    newEducation: {
      DegreeName: "",
      InstituteName: "",
      DegreeLevel: "",
      DegreeSpecialization: [],
      Graduation_year: "",
      ResultType: "",
      percentage: "",
      CGPA: "",
      Outof: "",
    },
    internshipPreference: {
      preferredFunction: [],
      mode: "",
      location: "",
    },
    hasWorkExperience: "No",
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
    if (step < 5) setStep(step + 1);
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
          />
        );
      case 2:
        return (
          <EducationInformation
            formData={formData}
            handleChange={handleEducationChange}
            addEducation={addEducation}
          />
        );
      case 3:
        return (
          <WorkExperience
            formData={formData}
            handleChange={handleWorkExperienceChange}
            addWorkExperience={addWorkExperience}
          />
        );
      case 4:
        return (
          <InternshipPreference
            formData={formData.internshipPreference}
            handleChange={handleInternshipPreferenceChange}
          />
        );
      case 5:
        return <Preview formData={formData} />;
      default:
        return null;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/nextgensubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      toast(data.message);
      setTimeout(() => {
        router.push("/nextgen-program/sendemail");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form data:", error);
      toast.error("Error submitting form data");
    } finally {
      setLoading(false);
    }
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

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
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
        percentage: "",
        CGPA: "",
        Outof: "",
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
    <div className="w-full max-w-4xl  mx-auto p-4 md:p-4 shadow-lg">
      <div className="flex justify-center lg:mb-4">
        <img src="/images/logo.png" alt="Logo" className="w-44 lg:w-72 h-auto" />
      </div>
      <h1 className="lg:text-2xl text-lg mb-4 text-center">Haidri Beverages NextGen Program 2024</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {steps.map((stepLabel, index) => (
          <div
            key={index}
            className={`p-2 md:p-5 border rounded-lg text-center ${
              step === index + 1 ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            {stepLabel.label}
          </div>
        ))}
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <Loader color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <>
          <div>{renderStep()}</div>
          <div className="mt-4 flex justify-between">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Previous
              </button>
            )}
            {step < 5 && (
              <button
                onClick={nextStep}
                className="bg-green-500 text-white p-2 rounded"
              >
                Save & Next
              </button>
            )}
            {step === 5 && (
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            )}
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default Form;
