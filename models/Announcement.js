import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: [true, "Date is required"],
      default: Date.now()
    },
    dateString: {
      type: String,
      required: [true, "Date as a string is required"]
    },
    heading: {
      type: String,
      required: [true, "Heading is required"],
      default: '',
    },
    details: {
      type: String,
      required: [true, "Details are required"],
      default: '',
    },
    image: {
      type: String,
      required: [true, "An image link is required"],
      default: '',
    },
    link: {
      type: String,
      default: '',
    }
  },
  { collection: "announcement" }
);

module.exports =
  mongoose.models.Announcement || mongoose.model("Announcement", AnnouncementSchema);