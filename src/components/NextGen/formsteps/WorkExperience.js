import React from 'react';

const WorkExperience = ({ formData, handleChange, addWorkExperience }) => {
  return (
    <div>
      <label className="block mb-2">Do you have work experience?</label>
      <select
        name="hasWorkExperience"
        value={formData.hasWorkExperience}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      >
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>
      {formData.hasWorkExperience === "Yes" && (
        <div className="mt-5">
          <label className="block mb-2">Work History (Start With Most Recent)</label>
         
          {formData.workExperience.map((experience, index) => (
            <div key={index} className="mb-5 p-4 border rounded">
              <div className="mb-2">Experience {index + 1}</div>
              <div><strong>Position Held:</strong> {experience.PositionHeld}</div>
              <div><strong>Organization Name:</strong> {experience.OrganizationName}</div>
              <div><strong>From Date:</strong> {experience.FromDate}</div>
              <div><strong>To Date:</strong> {experience.ToDate}</div>
              <div><strong>Presently Working:</strong> {experience.PresentlyWorking ? "Yes" : "No"}</div>
            </div>
          ))}

          <div className="mt-5">
            <label className="block mb-2">Position Held</label>
            <input
              type="text"
              name="PositionHeld"
              value={formData.newExperience.PositionHeld || ''}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <label className="block mb-2">Organization Name</label>
            <input
              type="text"
              name="OrganizationName"
              value={formData.newExperience.OrganizationName || ''}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <label className="block mb-2">From Date</label>
            <input
              type="date"
              name="FromDate"
              value={formData.newExperience.FromDate || ''}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <label className="block mb-2">To Date</label>
            <input
              type="date"
              name="ToDate"
              value={formData.newExperience.ToDate || ''}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <label className="block mb-2 pt-10">Presently Working</label>
            <div className="flex justify-start">
              <input
                type="checkbox"
                name="PresentlyWorking"
                checked={formData.newExperience.PresentlyWorking || false}
                onChange={handleChange}
                className="border p-2 pb-5 rounded"
              />
            </div>
          </div>

          <button onClick={addWorkExperience} className="bg-blue-500 text-white p-2 rounded mt-5">
            Add More
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
