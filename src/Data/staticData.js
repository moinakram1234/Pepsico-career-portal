import { FaUsers, FaBuilding, FaShoppingCart, FaUserShield, FaDollarSign, FaUserFriends, FaBalanceScale, FaBullhorn, FaLaptopCode, FaShippingFast, FaCogs, FaCheckCircle, FaClipboardCheck, FaFlask } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa'; // Default icon

export const getDepartmentIcon = (departmentName) => {
  switch (departmentName) {
    case "People & Culture":
      return FaUsers 
    case "Utilities":
      return FaBuilding 
    case "Procurement":
      return FaShoppingCart 
    case "Administration":
      return FaUserShield 
    case "Sales":
      return FaDollarSign 
    case "Human Resources":
      return FaUserFriends 
    case "Finance":
      return FaBalanceScale 
    case "Trade Marketing":
      return FaBullhorn 
    case "Information Technology":
      return FaLaptopCode 
    case "GTM & Capability":
      return FaBullhorn 
    case "Market Research and Development":
      return FaFlask 
    case "Warehouse & Logistics":
      return FaShippingFast 
    case "Production":
      return FaCogs 
    case "Quality Control":
      return FaCheckCircle 
    case "Audit":
      return FaClipboardCheck 
    default:
      return FaQuestionCircle  // Return a default icon if no match is found
  }
};



export const HiringProcess = [
  {
    id: 1,
    text: "Apply",
    content:
      "Once you've identified an opportunity of interest, we invite you to submit an application via online portal where you can fill your application form, apply to jobs and review your application status. After you apply, you will be contacted by a member of our internal recruitment team who will review your credentials against the requirements for the role you've expressed interest in. You will then be contacted regarding next steps.",
  },
  {
    id: 2,
    text: "Assess",
    content:
      "At Haidri Beverages, we offer various options for two-way communication during the hiring process. As a first step, we may initiate dialogue with you via telephone or video interview. Depending on the role, location and timeliness, you may then be invited for in-person interviews. For sales role, we may assign you to a market visit task. It is designed to evaluate a candidate's foundational, professional and leadership capability. ",
  },
  {
    id: 3,
    text: "Offer & On-boarding",
    content:
      "It's decision time. Our team works equally hard to ensure the right hiring decision is made for you and Haidri Beverages. If selected for the role, our internal recruitment team will contact you to review the offer letter details, benefits and more information on your new career at Haidri Beverages. Once you've accepted an offer at Haidri Beverages, you will be asked to submit documental credentials against the requirements for the role to start our pre-onboarding process as quickly as possible. ",
  },
];

export const prefferdata = [
  { value: "Administration", label: "Administration" },
  { value: "Human Resources", label: "Human Resources" },
  { value: "Finance", label: "Finance" },
  { value: "Trade Marketing", label: "Trade Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "Information Technology", label: "Information Technology" },
  { value: "GTM & Capability", label: "GTM & Capability" },
  {
    value: "Market Research and Development",
    label: "Market Research and Development",
  },
  // { value: "Aquafina Bulk", label: "Aquafina Bulk" },
  { value: "Warehouse & Logistics", label: "Warehouse & Logistics" },
  { value: "Production", label: "Production" },
  { value: "Quality Control", label: "Quality Control" },
  { value: "Audit", label: "Audit" },
  { value: "Procurement", label: "Procurement" },
  // { value: "Customer Services", label: "Customer Services" },
  { value: "People & Culture", label: "People & Culture" },
  // { value: "Employer Branding", label: "Employer Branding" },
  { value: "Utilities", label: "Utilities" },
  // Add more degrees as needed
];
export const DepartmentData = [
  {
    label: "People & Culture",
    imagePath: "/images/it-support.webp",
    value: "People & Culture",
  },
  {
    label: "Utilities",
    imagePath: "/images/it-support.webp",
    value: "Utilities",
  },
  {
    label: "Procurement",
    imagePath: "/images/it-support.webp",
    value: "Procurement",
  },
  {
    label: "Administration",
    imagePath: "/images/management-service.png",
    value: "Administration",
  },
  { label: "Sales", imagePath: "/images/sale.png", value: "Sales" },
  {
    label: "Human Resources",
    imagePath: "/images/human-resource.png",
    value: "Human Resources",
  },
  { label: "Finance", imagePath: "/images/finance.png", value: "Finance" },
  {
    label: "Finance",
    imagePath: "/images/customer-support.png",
    value: "Finance",
  },
  {
    label: "Trade Marketing",
    imagePath: "/images/product-development.png",
    value: "Trade Marketing",
  },
  {
    label: "Sales",
    imagePath: "/images/research-and-development.png",
    value: "Sales",
  },
  {
    label: "Information Technology",
    imagePath: "/images/it-support.webp",
    value: "Information Technology",
  },
  {
    label: "GTM & Capability",
    imagePath: "/images/it-support.webp",
    value: "GTM & Capability",
  },
  {
    label: "Market Research and Development",
    imagePath: "/images/it-support.webp",
    value: "Market Research and Development",
  },
  {
    label: "Warehouse & Logistics",
    imagePath: "/images/it-support.webp",
    value: "Warehouse & Logistics",
  },
  {
    label: "Production",
    imagePath: "/images/it-support.webp",
    value: "Production",
  },
  {
    label: "Quality Control",
    imagePath: "/images/it-support.webp",
    value: "Quality Control",
  },
  {
    label: "Audit",
    imagePath: "/images/it-support.webp",
    value: "Audit",
  },
];
export const optionsexperince = [
  { value: "Student", label: "Student" },
  { value: "Graduates", label: "Graduates" },
  { value: "experienced", label: "Experienced" },
];

export const degreeNames = [
  { value: "Bachelors", label: "Bachelors" },
  { value: "Masters", label: "Masters" },

  // Add more degrees as needed
];
export const hasWorkExperience = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

export const LocationNames = [
  { value: "Peshawar", label: "Peshawar" },
  { value: "Islamabad", label: "Islamabad" },
];
export const institutes = [
  { value: "University of the Punjab", label: "University of the Punjab" },
  {
    value: "National University of Computer and Emerging Sciences (FAST-NUCES)",
    label: "National University of Computer and Emerging Sciences (FAST-NUCES)",
  },
  {
    value: "Lahore University of Management Sciences",
    label: "Lahore University of Management Sciences",
  },
  { value: "Karachi University", label: "Karachi University" },
  { value: "Aga Khan University", label: "Aga Khan University" },
  { value: "Quaid-i-Azam University", label: "Quaid-i-Azam University" },
  {
    value: "COMSATS Institute of Information Technology",
    label: "COMSATS Institute of Information Technology",
  },
  { value: "University of Karachi", label: "University of Karachi" },
  { value: "University of Peshawar", label: "University of Peshawar" },
  {
    value: "University of Agriculture, Faisalabad",
    label: "University of Agriculture, Faisalabad",
  },
  {
    value: "Institute of Business Administration",
    label: "Institute of Business Administration",
  },
  {
    value: "Pakistan Institute of Engineering and Applied Sciences",
    label: "Pakistan Institute of Engineering and Applied Sciences",
  },
  { value: "University of Lahore", label: "University of Lahore" },
  {
    value: "Bahauddin Zakariya University",
    label: "Bahauddin Zakariya University",
  },
  {
    value: "University of Engineering and Technology, Lahore",
    label: "University of Engineering and Technology, Lahore",
  },
  {
    value: "Mehran University of Engineering and Technology",
    label: "Mehran University of Engineering and Technology",
  },
  {
    value: "NED University of Engineering and Technology",
    label: "NED University of Engineering and Technology",
  },
  {
    value: "Government College University, Lahore",
    label: "Government College University, Lahore",
  },
  { value: "University of Sargodha", label: "University of Sargodha" },
  { value: "University of Gujrat", label: "University of Gujrat" },
  {
    value: "University of Management and Technology",
    label: "University of Management and Technology",
  },
  { value: "University of Sindh", label: "University of Sindh" },
  {
    value: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
    label: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
  },
  {
    value: "University of Azad Jammu and Kashmir",
    label: "University of Azad Jammu and Kashmir",
  },
  {
    value: "International Islamic University, Islamabad",
    label: "International Islamic University, Islamabad",
  },
  {
    value: "University of Veterinary and Animal Sciences",
    label: "University of Veterinary and Animal Sciences",
  },
  {
    value: "Allama Iqbal Open University",
    label: "Allama Iqbal Open University",
  },
  { value: "Bahria University", label: "Bahria University" },
  {
    value: "Fatima Jinnah Women University",
    label: "Fatima Jinnah Women University",
  },
  {
    value: "Foundation University Islamabad",
    label: "Foundation University Islamabad",
  },
  {
    value: "Lahore College for Women University",
    label: "Lahore College for Women University",
  },
  { value: "University of South Asia", label: "University of South Asia" },
  {
    value: "National University of Modern Languages",
    label: "National University of Modern Languages",
  },
  {
    value: "National University of Sciences and Technology (NUST)",
    label: "National University of Sciences and Technology (NUST)",
  },
  {
    value: "Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology",
    label: "Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology",
  },
  {
    value: "Institute of Space Technology",
    label: "Institute of Space Technology",
  },
  { value: "University of Balochistan", label: "University of Balochistan" },
  { value: "University of Malakand", label: "University of Malakand" },
  { value: "University of Swat", label: "University of Swat" },
  { value: "Khyber Medical University", label: "Khyber Medical University" },
  {
    value: "Islamia University of Bahawalpur",
    label: "Islamia University of Bahawalpur",
  },
  { value: "Hazara University", label: "Hazara University" },
  { value: "Abdul Wali Khan University", label: "Abdul Wali Khan University" },
  {
    value: "National Textile University",
    label: "National Textile University",
  },
  {
    value: "Sir Syed University of Engineering and Technology",
    label: "Sir Syed University of Engineering and Technology",
  },
  {
    value: "other",
    label: "other",
  },
  // Add more institutes as needed
];
export const degreeLevels = [
  { value: "Associate", label: "Associate" },
  { value: "Bachelor", label: "Bachelor" },
  { value: "Master", label: "Master" },
  { value: "Doctorate", label: "Doctorate" },
  { value: "PostDoctorate", label: "Post-Doctorate" },
  { value: "Professional", label: "Professional" },
  { value: "Diploma", label: "Diploma" },
  { value: "Certificate", label: "Certificate" },
  // Add more degree levels as needed
];
export const cityOptions = [
  { value: "Peshawar", label: "Peshawar" },
  { value: "Islamabad", label: "Islamabad" },
  // Add more city options here
];
export const degreeSpecializations = [
  { value: "Human Resource Management", label: "Human Resource Management" },
  { value: "Accounting and Finance", label: "Accounting and Finance" },
  { value: "Mechatronics Engineering", label: "Mechatronics Engineering" },
  { value: "Artificial Intelligence", label: "Artificial Intelligence" },
  { value: "Business Analytics", label: "Business Analytics" },
  { value: "Computer Science", label: "Computer Science" },
  { value: "Computer Engineering", label: "Computer Engineering" },
  {
    value: "Software Project Management",
    label: "Software Project Management",
  },
  { value: "Marketing", label: "Marketing" },
  { value: "Material Engineering", label: "Material Engineering" },
  {
    value: "Food Science and Technology",
    label: "Food Science and Technology",
  },
  { value: "Supply Chain", label: "Supply Chain" },
  { value: "Economics", label: "Economics" },
  { value: "Taxation Management", label: "Taxation Management" },
  { value: "Environmental Sciences", label: "Environmental Sciences" },
  { value: "Sales and Marketing", label: "Sales and Marketing" },
  { value: "Graphic Designing", label: "Graphic Designing" },
  { value: "Mass Communication", label: "Mass Communication" },
  { value: "Media Management", label: "Media Management" },
  { value: "Project Management", label: "Project Management" },
  { value: "Advertising Management", label: "Advertising Management" },
  { value: "Treasury Management", label: "Treasury Management" },
  { value: "Consumer Behavior", label: "Consumer Behavior" },
  { value: "Business Marketing", label: "Business Marketing" },
  { value: "Product Management", label: "Product Management" },
  { value: "Marketing Research", label: "Marketing Research" },
  { value: "Evolution & genetics", label: "Evolution & genetics" },
  { value: "Chemical Engineering", label: "Chemical Engineering" },
  { value: "Microbiology", label: "Microbiology" },
  { value: "Botanical sciences", label: "Botanical sciences" },
  { value: "Botany", label: "Botany" },
  { value: "Paleobotany", label: "Paleobotany" },
  { value: "Zoological sciences", label: "Zoological sciences" },
  { value: "Zoology", label: "Zoology" },
  { value: "Paleo-zoology", label: "Paleo-zoology" },
  {
    value: "Marine Sciences (Biological Aspects)",
    label: "Marine Sciences (Biological Aspects)",
  },
  { value: "Biological Anthropology", label: "Biological Anthropology" },
  { value: "Biotechnology", label: "Biotechnology" },
  { value: "Biochemistry", label: "Biochemistry" },
  { value: "Proteomics", label: "Proteomics" },
  { value: "Medicine", label: "Medicine" },
  {
    value: "Human anatomy, cytology, histology",
    label: "Human anatomy, cytology, histology",
  },
  { value: "Human physiology", label: "Human physiology" },
  { value: "Pathology", label: "Pathology" },
  { value: "Internal medicine", label: "Internal medicine" },
  {
    value: "Pharmacy, Pharmacology & theraputics",
    label: "Pharmacy, Pharmacology & theraputics",
  },
  {
    value: "Surgery & related medical specialties",
    label: "Surgery & related medical specialties",
  },
  {
    value: "Gynecology related medical specialties",
    label: "Gynecology related medical specialties",
  },
  { value: "Experimental medicine", label: "Experimental medicine" },
  { value: "Ophthalmology", label: "Ophthalmology" },
  { value: "Dermatology", label: "Dermatology" },
  { value: "Pediatrics", label: "Pediatrics" },
  { value: "Promotion of health", label: "Promotion of health" },
  {
    value: "Incidence & prevention of disease",
    label: "Incidence & prevention of disease",
  },
  { value: "Epidemiology", label: "Epidemiology" },
  { value: "Mechanics", label: "Mechanics" },
  { value: "Electricity & Electronics", label: "Electricity & Electronics" },
  { value: "Modern physics", label: "Modern physics" },
  { value: "Nuclear Physics", label: "Nuclear Physics" },
  { value: "Biochemistry", label: "Biochemistry" },
  { value: "Analytical chemistry", label: "Analytical chemistry" },
  { value: "Crystallography", label: "Crystallography" },
  {
    value: "Astronomy & allied sciences",
    label: "Astronomy & allied sciences",
  },
  {
    value: "Earth (Astronomical geography)",
    label: "Earth (Astronomical geography)",
  },
  { value: "Mathematical geography", label: "Mathematical geography" },
  { value: "Astro-geology", label: "Astro-geology" },
  { value: "Astro-physics", label: "Astro-physics" },
  {
    value: "Earth sciences & Allied Sciences",
    label: "Earth sciences & Allied Sciences",
  },
  {
    value: "Geology, hydrology, meteorology",
    label: "Geology, hydrology, meteorology",
  },
  { value: "Petrology, Mineralogy", label: "Petrology, Mineralogy" },
  { value: "Economic geology", label: "Economic geology" },
  {
    value: "Paleontology- Paleozoology, Paleobotany",
    label: "Paleontology- Paleozoology, Paleobotany",
  },
  { value: "Oceanography", label: "Oceanography" },
  {
    value: "Information Technology, Software Engineering",
    label: "Information Technology, Software Engineering",
  },
  { value: "Applied Mathematics", label: "Applied Mathematics" },
  { value: "Management engineering", label: "Management engineering" },
  {
    value: "Management information systems",
    label: "Management information systems",
  },
  { value: "Ergonomics", label: "Ergonomics" },
  {
    value: "Technical & Vocational education",
    label: "Technical & Vocational education",
  },
  { value: "Industrial research", label: "Industrial research" },
  { value: "Industrial engineering", label: "Industrial engineering" },
  { value: "Computer Engineering", label: "Computer Engineering" },
  { value: "Civil engineering", label: "Civil engineering" },
  { value: "Bioengineering", label: "Bioengineering" },
  { value: "Agriculture Engineering", label: "Agriculture Engineering" },
  { value: "Systems engineering", label: "Systems engineering" },
  { value: "Environmental engineering", label: "Environmental engineering" },
  { value: "Engineering economy", label: "Engineering economy" },
  { value: "Engineering meteorology", label: "Engineering meteorology" },
  { value: "Applied mechanics", label: "Applied mechanics" },
  { value: "Acoustical engineering", label: "Acoustical engineering" },
  { value: "Structural engineering", label: "Structural engineering" },
  { value: "Engineering geology", label: "Engineering geology" },
  { value: "Transportation engineering", label: "Transportation engineering" },
  { value: "Applied optics", label: "Applied optics" },
  { value: "Photonics", label: "Photonics" },
  { value: "Plasma engineering", label: "Plasma engineering" },
  { value: "Hydraulic engineering", label: "Hydraulic engineering" },
  { value: "Environmental Engineering", label: "Environmental Engineering" },
  { value: "Mechanical engineering", label: "Mechanical engineering" },
  { value: "Electrical engineering", label: "Electrical engineering" },
  { value: "Electronics", label: "Electronics" },
  { value: "Nuclear engineering", label: "Nuclear engineering" },
  { value: "Aeronautics", label: "Aeronautics" },
  { value: "Astronautics", label: "Astronautics" },
  { value: "Mining engineering", label: "Mining engineering" },
  { value: "Metallurgy", label: "Metallurgy" },
  { value: "Public Finance Banking", label: "Public Finance Banking" },
  { value: "Finance Management", label: "Finance Management" },
  { value: "Commerce", label: "Commerce" },
  {
    value: "Business Administration & Management",
    label: "Business Administration & Management",
  },
  { value: "Social Sciences", label: "Social Sciences" },
  {
    value: "Anthropology including Physical anthropology",
    label: "Anthropology including Physical anthropology",
  },
  { value: "Archeology", label: "Archeology" },
  { value: "Economics", label: "Economics" },
  { value: "Statistics", label: "Statistics" },
  { value: "Political Science", label: "Political Science" },
  { value: "International Relations", label: "International Relations" },
  { value: "Psychology", label: "Psychology" },
  { value: "Philosophy", label: "Philosophy" },
  { value: "Sociology", label: "Sociology" },
  { value: "Criminology", label: "Criminology" },
  {
    value: "Administrative sciences including Public Administration",
    label: "Administrative sciences including Public Administration",
  },
  {
    value: "Library and Archival Sciences",
    label: "Library and Archival Sciences",
  },
  { value: "History", label: "History" },
  { value: "Geography", label: "Geography" },
  { value: "Statistics", label: "Statistics" },
  { value: "Religious Studies", label: "Religious Studies" },
  { value: "Education", label: "Education" },
  { value: "Law and Legislature", label: "Law and Legislature" },
  { value: "Arts & Humanities", label: "Arts & Humanities" },
  { value: "Fine Arts", label: "Fine Arts" },
  { value: "Photography", label: "Photography" },
  {
    value: "Recreational & performing arts",
    label: "Recreational & performing arts",
  },
  { value: "Music", label: "Music" },
  {
    value: "Physical Education and sports",
    label: "Physical Education and sports",
  },
  { value: "Languages and Literature", label: "Languages and Literature" },
  { value: "Museology (Museum science)", label: "Museology (Museum science)" },
  {
    value: "Journalism, Advertisement, mass c",
    label: "Journalism, Advertisement, mass c",
  },
  { value: "other", label: "other" },
  // Add more specializations as needed
];
