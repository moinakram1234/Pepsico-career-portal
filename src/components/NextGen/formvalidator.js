import { toast } from "react-toastify";

export function validatePersonalInfo(personalInfo,file) {
  const errors = {};

  // List of required fields
  const requiredFields = [
    "name",
    "gender",
    "dob",
    "email",
    "mobile",
    "cnic",
    "city",
   
    "permanentaddress",
    "currentaddress",
    "linkedinhandle",
  ];

  // Check each required field for a value
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!personalInfo[field] || personalInfo[field] === "") {
      errors[field] = `${field} is required.`;
     
    }
  }



  // Validate mobile number
 const mobilePattern = /^03\d{2}-\d{7}$/;
  if (!mobilePattern.test(personalInfo.mobile)) {
    errors.mobile = "Invalid mobile number. It should be in the format 03XXXXXXXXX.";
  }

  // Validate Pakistani CNIC format with dashes
  const cnicPattern = /^\d{5}-\d{7}-\d{1}$/;
  if (!cnicPattern.test(personalInfo.cnic)) {
    errors.cnic = "Invalid CNIC format. It should be in the format XXXXX-XXXXXXX-X.";
  }

  // Valid file types: PDF and Word documents
  const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  if (!validTypes.includes(file.type)) {
    errors["fileType"] = "Invalid file type. Only PDF and Word documents are allowed.";
    
  }

  // Maximum file size (1MB)
  const maxSizeInBytes = 1 * 1024 * 1024; // 1MB
  if (file.size > maxSizeInBytes) {
    errors["fileSize"] = "File size exceeds the 1MB limit.";
    
  }
    // Read the file content and validate that it doesn't contain code
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target.result;
    
      // Basic check for script tags or other code-like patterns
      const codePattern = /<\s*script|<\s*\/\s*script|<\?php|<\s*\/?\s*\%|<\%|<\s*\?php|\$\{|{.*}|<\?=|@\w+/gi;
      if (codePattern.test(fileContent)) {
        errors.fileContent = "File contains potentially malicious code.";
      }
    };
  
    reader.readAsText(file);
  
  return { errors, checker: Object.keys(errors).length === 0 };
}

export function validateEducation(educationData) {
  // Check if education array has at least one entry
  if (educationData.education.length === 0) {
    toast.error(`At least one education entry is required.`);
    return false;
  }

  // Return true if all validations pass
  return true;
}
export function validateEducation2(educationData) {
  const errors = {};

  // Check if education array has at least one entry
  const eduEntry = educationData.newEducation;

  // List of required fields for each education entry
  const requiredFields = [
    "DegreeName",
    "InstituteName",
    "Graduation_year",
    "CGPA",
  ];

  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!eduEntry[field] || eduEntry[field] === "") {
      errors[field] = `${field} is required.`;
    }
  }

  if (eduEntry.CGPA && parseFloat(eduEntry.CGPA) > 4) {
    errors["CGPA"] = "CGPA cannot be greater than 4.";
  }

  if (!eduEntry.DegreeSpecialization || eduEntry.DegreeSpecialization.length === 0) {
    errors["DegreeSpecialization"] = "DegreeSpecialization is required.";
  }

  // Return errors object and validity boolean
  return { errors, checker: Object.keys(errors).length === 0 };
}
export function validateworkexperience(experienceData) {
  const errors = {};

  // Validate each newExperience entry in the experience data
  const expEntry = experienceData.newExperience;

  // List of required fields for each work experience entry
  const requiredFields = [
    "PositionHeld",
    "OrganizationName",
    "FromDate",
    "ToDate",
  ];

  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!expEntry[field] || expEntry[field] === "") {
      if(field==="ToDate" && experienceData.newExperience.PresentlyWorking===true)
      {
        continue;
      }
      errors[field] = `${field} is required.`;
    }
  }

  // Return errors object and validity boolean
  return { errors, checker: Object.keys(errors).length === 0 };
}

// Function to validate file details (type and size)

export function validateInternshipPreference(formData) {
  const preerrors = {};
  let prefchecker = true;

  if ( formData.preferredFunction.length === 0) {
    preerrors.preferredFunction = "Internship preference is required.";
    prefchecker = false;
  }
  if (formData.location === "") {
    preerrors.location = "Internship location is required.";
    prefchecker = false;
  }

  return {preerrors, prefchecker};
}
