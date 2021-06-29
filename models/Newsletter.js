import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email must be unique"],
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: "newsletter" }
);

module.exports =
  mongoose.models.Newsletter || mongoose.model("Newsletter", NewsletterSchema);
