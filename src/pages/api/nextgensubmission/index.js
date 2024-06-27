// pages/api/nextgensubmission.js

import { FormData, createnextgenappform, getUserByEmail } from "../mongodb/nextgen";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { Useremail, accessibility, personalInfo, education, internshipPreference, hasWorkExperience, workExperience } = req.body;

      const result = await createnextgenappform({
        Useremail,
        accessibility,
        personalInfo,
        education,
        internshipPreference,
        hasWorkExperience,
        workExperience,
      });

      res.status(201).json({ message: result });
    } catch (error) {
      res.status(500).json({ error: 'Error saving form data to database', message: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const { email } = req.query;

     const formData = await  getUserByEmail(email)

      if (formData) {
        res.status(200).json({ exists: true });
      } else {
        res.status(200).json({ exists: false });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error checking form submission', message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
