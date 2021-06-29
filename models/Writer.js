import mongoose from "mongoose";

const WriterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please add a name"],
    },
    avatar: {
      type: String,
      default:
        "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg",
    },
    position: {
      type: String,
      required: [true, "Please add a position"],
    },
    about: {
      type: String,
      default: "This user has not submitted this section.",
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Unique username is required"],
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
  { collection: "writers" }
);

module.exports =
  mongoose.models.Writer || mongoose.model("Writer", WriterSchema);
