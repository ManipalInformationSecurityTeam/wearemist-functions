import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    photo: {
      type: String,
    },
    position: {
      type: String,
      required: [true, "Position is required"],
    },
    about: {
      type: String,
      required: [true, "About is required"],
    },
    social: {
      linkedin: {
        type: String,
      },
      webpage: {
        type: String,
      },
      email: {
        type: String,
      },
      github: {
        type: String,
      },
      blog: {
        type: String,
      },
      twitter: {
        type: String,
      },
      facebook: {
        type: String,
      },
      instagram: {
        type: String,
      },
      youtube: {
        type: String,
      },
    },
  },
  { collection: "boards" }
);

export default mongoose.models.Board || mongoose.model("Board", BoardSchema);
