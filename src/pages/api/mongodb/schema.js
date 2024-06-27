// schema.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const createdAtOptions = {
  type: Date,
  default: Date.now,
};

let User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.model("User");
} else {
  const userSchema = new Schema({
    email: {
      type: String,
      unique: true,
      required: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: Boolean,
      default: false,
    },
    // Add createdAt and updatedAt timestamps
    CNIC: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    createdAt: createdAtOptions,
  });

  User = mongoose.model("User", userSchema);
}
const FormDataSchema = new mongoose.Schema({
  accessibility: {
    disability: String,
    specialAssistance: String,
  },
  personalInfo: {
    name: String,
    gender: String,
    dob: Date,
    email: String,
    mobile: String,
    cnic: String,
    city: String,
    languages: [String],
    permanentaddress: String,
    currentaddress: String,
    instagramhandle: String,
    linkedinhandle: String,
    areyoucontentcreator: String,
  },
  education: {
    DegreeName: String,
    InstituteName: String,
    DegreeLevel: String,
    DegreeSpecialization: String,
    Graduation_year: Number,
    ResultType: String,
    percentage: Number,
    CGPA: Number,
    Outof: Number,
  },
  internshipPreference: {
    preferredFunction: String,
    mode: String,
    location: String,
  },
  hasWorkExperience: String,
  user_email: { type: String, required: true },
  workExperience: [
    {
      PositionHeld: String,
      OrganizationName: String,
      FromDate: Date,
      ToDate: Date,
      PresentlyWorking: Boolean,
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const FormData = mongoose.models.FormData || mongoose.model('FormData', FormDataSchema);

export { User, FormData };