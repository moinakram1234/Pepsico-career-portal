import React from 'react';
import { MdPerson, MdSchool, MdWork, MdLocationOn } from 'react-icons/md'; // Import icons from react-icons

const Preview = ({ formData }) => {
  return (
    <div className="p-6 bg-gray-100">
      <h3 className="text-2xl font-bold mb-6">Preview</h3>
      
      {/* Personal Information Card */}
      <div className="bg-white shadow-md rounded-md p-4 mb-6">
        <h4 className="text-xl font-semibold mb-4 flex items-center"><MdPerson className="mr-2" /> Personal Information</h4>
        <p className="mb-2"><strong className="font-semibold">Full Name:</strong> {formData.personalInfo.name}</p>
        <p className="mb-2"><strong className="font-semibold">Gender:</strong> {formData.personalInfo.gender}</p>
        <p className="mb-2"><strong className="font-semibold">Date of Birth:</strong> {formData.personalInfo.dob}</p>
        <p className="mb-2"><strong className="font-semibold">Email:</strong> {formData.personalInfo.email}</p>
        <p className="mb-2"><strong className="font-semibold">Mobile Number:</strong> {formData.personalInfo.mobile}</p>
        <p className="mb-2"><strong className="font-semibold">CNIC No.:</strong> {formData.personalInfo.cnic}</p>
        <p className="mb-2"><strong className="font-semibold">Languages Spoken:</strong> {formData.personalInfo.languages.map(language => language.label).join(", ")}</p>
      </div>
      
      {/* Education Information Cards */}
      {formData.education.map((education, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4 mb-6">
          <h4 className="text-xl font-semibold mb-4 flex items-center"><MdSchool className="mr-2" /> Education {index + 1}</h4>
          <p className="mb-2"><strong className="font-semibold">Degree Name:</strong> {education.DegreeName}</p>
          <p className="mb-2"><strong className="font-semibold">Institute Name:</strong> {education.InstituteName}</p>
          <p className="mb-2"><strong className="font-semibold">Degree Specialization:</strong> {education.DegreeSpecialization}</p>
          <p className="mb-2"><strong className="font-semibold">Graduation Year:</strong> {education.Graduation_year}</p>
          <p className="mb-2"><strong className="font-semibold">Result Type:</strong> {education.ResultType}</p>
          {education.ResultType === "percentage" ? (
            <p className="mb-2"><strong className="font-semibold">Percentage:</strong> {education.percentage}</p>
          ) : (
            <p className="mb-2"><strong className="font-semibold">CGPA:</strong> {education.CGPA}</p>
          )}
        </div>
      ))}
      
      {/* Work Experience Card */}
      <div className="bg-white shadow-md rounded-md p-4 mb-6">
        <h4 className="text-xl font-semibold mb-4 flex items-center"><MdWork className="mr-2" /> Work Experience</h4>
        {formData.workExperience.length > 0 ? (
          formData.workExperience.map((experience, index) => (
            <div key={index} className="mb-4">
              <p className="mb-2"><strong className="font-semibold">Position Held:</strong> {experience.PositionHeld}</p>
              <p className="mb-2"><strong className="font-semibold">Organization Name:</strong> {experience.OrganizationName}</p>
              <p className="mb-2"><strong className="font-semibold">From Date:</strong> {experience.FromDate}</p>
              <p className="mb-2"><strong className="font-semibold">To Date:</strong> {experience.ToDate}</p>
              <p className="mb-2"><strong className="font-semibold">Presently Working:</strong> {experience.PresentlyWorking ? 'Yes' : 'No'}</p>
            </div>
          ))
        ) : (
          <p>No work experience provided.</p>
        )}
      </div>
      
      {/* Internship Preference Card */}
      <div className="bg-white shadow-md rounded-md p-4 mb-6">
        <h4 className="text-xl font-semibold mb-4 flex items-center"><MdLocationOn className="mr-2" /> Internship Preference</h4>
        <p className="mb-2"><strong className="font-semibold">Preferred Function:</strong> {formData.internshipPreference.preferredFunction.join(", ")}</p>
        <p className="mb-2"><strong className="font-semibold">Location:</strong> {formData.internshipPreference.location}</p>
      </div>
    </div>
  );
};

export default Preview;
