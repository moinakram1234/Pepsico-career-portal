import Select from "react-select";
import CreatableSelect from "react-select/creatable";
const languagesSpoken = [
  { value: "English", label: "English" },

  { value: "Urdu", label: "Urdu" },
];

const PersonalInformation = ({ formData, handleChange }) => {
  return (
    <div>
      <label className="block mb-2">Full Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      />
      <label className="block mb-2">Gender</label>
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
            checked={formData.gender === "Male"}
            className="mr-2"
          />
          Male
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
            checked={formData.gender === "Female"}
            className="mr-2"
          />
          Female
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={handleChange}
            checked={formData.gender === "Other"}
            className="mr-2"
          />
          Other
        </label>
      </div>
      <label className="block mb-2">Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      />
      <label className="block mb-2">Email Address</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      />
      <label className="block mb-2">Mobile Number</label>
      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      />
      <label className="block mb-2">CNIC No.</label>
      <input
        type="text"
        name="cnic"
        value={formData.cnic}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      />
      {/* <label className="block mb-2">Hometown City</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      /> */}
      <label className="block mb-2">What Languages Do You Speak?</label>

      <CreatableSelect
        isMulti
        name="languages"
        options={languagesSpoken}
        className="basic-multi-select"
        classNamePrefix="select"
        value={formData.languages}
        onChange={(selectedOptions) => {
          handleChange({
            target: {
              name: "languages",
              value: selectedOptions,
            },
          });
        }}
        formatCreateLabel={(inputValue) => `Add "${inputValue}"`}
      />
      <label className="block mb-2">Permanent Address</label>
      <input
        type="text"
        name="permanentaddress"
        value={formData.permanentaddress}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      />
      <label className="block mb-2">Current Address</label>
      <input
        type="text"
        name="currentaddress"
        value={formData.currentaddress}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      />
      {/* <label className="block mb-2">Instagram Handle</label>
      <input
        type="text"
        name="instagramhandle"
        value={formData.instagramhandle}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      /> */}
      <label className="block mb-2">LinkedIn Handle</label>
      <input
        type="text"
        name="linkedinhandle"
        value={formData.linkedinhandle}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      />
      {/* <label className="block mb-2">Are You a Content Creator?</label>
      <select
        name="areyoucontentcreator"
        value={formData.areyoucontentcreator}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      >
        <option value="">Select One</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select> */}
    </div>
  );
};

export default PersonalInformation;
