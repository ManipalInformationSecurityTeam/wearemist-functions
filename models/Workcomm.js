import mongoose from "mongoose";

const WorkcommSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please add a name"],
    },
    photo: {
      type: String,
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
  { collection: "workcomms" }
);

module.exports =
  mongoose.models.Workcomm || mongoose.model("Workcomm", WorkcommSchema);
