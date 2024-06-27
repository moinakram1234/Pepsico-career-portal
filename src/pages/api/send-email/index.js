import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import connectDB from '../mongodb/db';
import { FormData } from '../mongodb/schema';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      await connectDB();

      const user = await  FormData.findOne({ 
        user_email:email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const name = user.personalInfo.name;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const mailOptions = {
        from: '"Haidri Beverages Private Limited"', // Sender address
        to: email, // List of recipients
        subject: 'NextGen Internship Program 2024', // Subject line
        html: `
          <!DOCTYPE html>
          <html>
          <head>
       
          </head>
          <body>
        
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/1200px-Pepsi_2023.svg.png" alt="NextGen Logo" width="50" height="50"><p>Successfully Applied for Pepsi NextGen Internship Program 2024</p>
          <p>Dear ${name},</p>
          <p>Greetings!</p>
          <p>Thank you for taking the time to apply for "NextGen" Internship Program. We appreciate the time and effort you have taken to apply for this opportunity.</p>
          <p>Our team will carefully review your application, assess your qualifications, and will reach out to shortlisted candidates.</p>
          <p>Please note that any of the organizations under this coalition can reach out to you. Once again, thank you for your interest in the "NextGen" Internship program. We wish you all the best and look forward to reviewing your application</p>
          <p>Best Regards,</p>
          <p>"NextGen" Project team.</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/1200px-Pepsi_2023.svg.png" alt="NextGen Logo" width="50" height="50">
          <p>Disclaimer: If you did not apply for NextGen, please ignore this message.</p>
          </body>
          </html>
        `, // HTML body
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
