import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import connectDB from './db';
import { User } from './schema';

connectDB();

const generateRandomPassword = (length = 8) => {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
};

const sendPasswordEmail = async (email, plainPassword) => {
  try {
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
  from: "muhayuddin7777@gmail.com",
  to: email,
  subject: "Your Account Password",
  html: `
    <div style="text-align: center;">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/1200px-Pepsi_2023.svg.png" alt="Logo" style="width: 200px;"/>
      <h1>Welcome to Our Service</h1>
      <p>Your password is: ${plainPassword}</p>
    </div>
  `,
};
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.messageId);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};
export const createUser = async ({ email, cnic, phone }) => {
  try {
    const message="";
    console.log(email)
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return { message: 'User already exists', error:'duplication' };
    }
    const existingUserByPhone = await User.findOne({ Phone: phone});

    if (existingUserByPhone) {
      return { message: 'Please register with another phone number', error:'duplication'  };
    }

    const existingUserByCnic = await User.findOne({ CNIC: cnic });

    if (existingUserByCnic) {
      return { message: 'Please change CNIC', error:'duplication' };
    }
    const userPassword = generateRandomPassword();
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const newUser = await User.create({
      email,
      userPassword: hashedPassword,
      isAdmin: false,
      CNIC: cnic,
      Phone: phone,
      createdAt: new Date(),
    });

    await sendPasswordEmail(email, userPassword);

    return {
      message: 'User created successfully',
      error:'',
      user: {
        id: newUser._id,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        createdAt: newUser.createdAt,
      },
      plainPassword: userPassword
    };
  } catch (error) {
    console.error('Error in createUser:', error);
    throw error;
  }
};

export const getUserByUsernameAndPassword = async (email, userPassword) => {
  try {
    const users = await User.find({ email });

    if (!users || users.length === 0) {
      return;
    }

    const passwordMatch = await bcrypt.compare(userPassword, users[0].userPassword);

    if (passwordMatch) {
      return users[0];
    } else {
      throw new Error('Invalid password');
    }
  } catch (error) {
    console.error('Error in getUserByUsernameAndPassword:', error.message);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    console.error('Error in getAllUsers:', error);
    throw error;
  }
};
