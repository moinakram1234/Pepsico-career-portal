import { LocationNames, prefferdata } from '@/Data/staticData';
import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

const InternshipPreference = ({ formData, handleChange }) => {
  return (
    <div>
      <label className="block mb-2">Internship Preference</label>
      <label className="block mb-2">Preferred Function</label>
      <CreatableSelect
        isMulti
        onChange={(selectedOptions) => 
          handleChange({
            target: {
              name: 'preferredFunction',
              value: selectedOptions ? selectedOptions.map(option => option.value) : []
            }
          })
        }
        options={prefferdata}
        value={formData.preferredFunction.map(value => ({ label: value, value }))}
        className="mb-3"
      />
      <label className="block mb-2">Location</label>
      <Select
        isClearable
        onChange={selectedOption =>
          handleChange({
            target: {
              name: 'location',
              value: selectedOption ? selectedOption.value : ''
            }
          })
        }
        options={LocationNames}
        value={formData.location ? { label: formData.location, value: formData.location } : null}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default InternshipPreference;
