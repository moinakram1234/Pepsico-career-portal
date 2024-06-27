import { degreeLevels, degreeNames, degreeSpecializations, institutes } from '@/Data/staticData';
import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
// List of Pakistani institutes


// List of degree names
const graduationYears = [];
const currentYear = new Date().getFullYear();
for (let year = 2022; year <= 2024; year++) {
  graduationYears.push({ value: year, label: year.toString() });
}
const EducationInformation = ({ formData, handleChange, addEducation }) => {
  const handleResultTypeChange = (e) => {
    const { name, value } = e.target;
    handleChange(e); // Call parent handleChange to update formData

    // Reset percentage, CGPA, Outof fields when ResultType changes
    if (value === "percentage") {
      handleChange({
        target: {
          name: "CGPA",
          value: ""
        }
      });
      handleChange({
        target: {
          name: "Outof",
          value: ""
        }
      });
    } else if (value === "CGPA") {
      handleChange({
        target: {
          name: "percentage",
          value: ""
        }
      });
    }
  };

  const handleInstituteChange = (selectedOption) => {
    handleChange({
      target: {
        name: 'InstituteName',
        value: selectedOption ? selectedOption.value : ''
      }
    });
  };

  const handleDegreeNameChange = (selectedOption) => {
    handleChange({
      target: {
        name: 'DegreeName',
        value: selectedOption ? selectedOption.value : ''
      }
    });
  };
  const handleDegreeLevelChange = (newValue, actionMeta) => {
    handleChange({
      target: {
        name: 'DegreeLevel',
        value: newValue ? newValue.value : '',
      },
    });
  };

  const handleDegreeSpecializationChange = (selectedOptions) => {
    handleChange({
      target: {
        name: 'DegreeSpecialization',
        value: selectedOptions ? selectedOptions.map(option => option.value) : []
      }
    });
  };

  const handleGraduationYearChange = (newValue, actionMeta) => {
    handleChange({
      target: {
        name: 'Graduation_year',
        value: newValue ? newValue.value : '',
      },
    });
  };

  return (
    <div>
      {formData.education.map((edu, index) => (
  <div key={index} className="mb-5 p-4 border rounded">
    <div className="mb-2">Education {index + 1}</div>
    <div><strong>Degree Name:</strong> {edu.DegreeName}</div>
    <div><strong>Institute Name:</strong> {edu.InstituteName}</div>
    {/* <div><strong>Degree Level:</strong> {edu.DegreeLevel}</div> */}
   <div><strong>Specialization:</strong> {edu.DegreeSpecialization.join(", ")}</div>
    <div><strong>Graduation Year:</strong> {edu.Graduation_year}</div>
    <div><strong>Result Type:</strong> {edu.ResultType}</div>
    <div><strong>Percentage:</strong> {edu.percentage}</div>
    <div><strong>CGPA:</strong> {edu.CGPA} </div>
  </div>
))}
      <label className="block mb-2">Education Information</label>
      <label className="block mb-2">Degree Name</label>
     <CreatableSelect
  name="DegreeName"
value={
  degreeNames.find(degree => degree.value === formData.newEducation.DegreeName) || 
  (formData.newEducation.DegreeName ? { value: formData.newEducation.DegreeName, label: formData.newEducation.DegreeName } : null)
}
  onChange={handleDegreeNameChange}
  options={degreeNames}
  className="border p-2 rounded w-full mb-3"
  isClearable
  formatCreateLabel={inputValue => `Add "${inputValue}"`}
/>
      <label className="block mb-2">Institute Name</label>
      <CreatableSelect
        name="InstituteName"
       value={
  institutes.find(institute => institute.value === formData.newEducation.InstituteName) || 
  (formData.newEducation.InstituteName ? { value: formData.newEducation.InstituteName, label: formData.newEducation.InstituteName } : null)
}
        onChange={handleInstituteChange}
        options={institutes}
        className="border p-2 rounded w-full mb-3"
        isClearable
        isCreatable
      />
      {/* <label className="block mb-2">Degree Level</label>
      <CreatableSelect
        name="DegreeLevel"
        value={degreeLevels.find((level) => level.value === formData.DegreeLevel)}
        onChange={handleDegreeLevelChange}
        options={degreeLevels}
        className="border p-2 rounded w-full mb-3"
        isClearable
        isCreatable
      /> */}
 <label className="block mb-2">Degree Specialization</label>
<CreatableSelect
  name="DegreeSpecialization"
  value={formData.newEducation.DegreeSpecialization.map(spec => degreeSpecializations.find(s => s.value === spec))}
  onChange={handleDegreeSpecializationChange}
  formatCreateLabel={(inputValue) => `Add "${inputValue}"`}

  options={degreeSpecializations}
  className="border p-2 rounded w-full mb-3"
  isClearable
  isMulti
/>
     <label className="block mb-2">Graduation Year</label>
<Select
  name="GraduationYear"
  value={
  graduationYears.find(year => year.value === formData.newEducation.Graduation_year) || 
  (formData.newEducation.Graduation_year ? { value: formData.newEducation.Graduation_year, label: formData.newEducation.Graduation_year } : null)
}
  onChange={handleGraduationYearChange}
  options={graduationYears}
  className="border p-2 rounded w-full mb-3"
/>
      <label className="block mb-2">Result Type</label>
      <select
        name="ResultType"
        value={formData.newEducation.ResultType}
        onChange={handleResultTypeChange}
        className="border p-2 rounded w-full mb-3"
      >
        <option value="">Select Result Type</option>
        <option value="percentage">Percentage</option>
        <option value="CGPA">CGPA</option>
      </select>

      {formData.newEducation.ResultType === "percentage" && (
        <div className="mb-3">
          <label className="block mb-2">Percentage</label>
          <input
            type="text"
            name="percentage"
            value={formData.newEducation.percentage}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
      )}

      {formData.newEducation.ResultType === "CGPA" && (
        <div>
          <label className="block mb-2">CGPA</label>
          <input
            type="text"
            name="CGPA"
            value={formData.CGPA}
            onChange={handleChange}
            className="border p-2 rounded w-full mb-3"
          />
          {/* <label className="block mb-2">Out of (Scale)</label>
          <select
            name="Outof"
            value={formData.Outof}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Scale</option>
            <option value="4">Out of 4</option>
            <option value="5">Out of 5</option>
          </select> */}
        
        </div>
      )}
          <button onClick={addEducation} className="bg-blue-500 text-white p-2 rounded mt-5">
            Add More
          </button>
    </div>
  );
};

export default EducationInformation;
