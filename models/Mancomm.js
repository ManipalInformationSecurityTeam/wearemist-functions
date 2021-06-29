import mongoose from "mongoose";

const MancommSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please add a name"],
    },
    photo: {
      type: String,
    },
    about: {
      type: String,
      required: [true, "About is required"],
    },
    social: {
      linkedin: {
        type: String,
        trim: true,
      },
      webpage: {
        type: String,
        trim: true,
      },
      email: {
        type: String,
        trim: true,
      },
      github: {
        type: String,
        trim: true,
      },
      blogger: {
        type: String,
        trim: true,
      },
      medium: {
        type: String,
        trim: true,
      },
      twitter: {
        type: String,
        trim: true,
      },
      facebook: {
        type: String,
        trim: true,
      },
      instagram: {
        type: String,
        trim: true,
      },
      youtube: {
        type: String,
        trim: true,
      },
    },
  },
  { collection: "mancomms" }
);

module.exports =
  mongoose.models.Mancomm || mongoose.model("Mancomm", MancommSchema);
