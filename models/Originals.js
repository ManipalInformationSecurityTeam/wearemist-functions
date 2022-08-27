import mongoose from "mongoose";

const OriginalsSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        default: "",
        required: true
    },
    image: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        required: true, 
        default: "podcast"
    },
    speakers: [{
        type: String,
    }],
    hosts: [{
        type: String,
    }],
    description: {
        type: String,
    },
    link: {
        type: String
    },
  },
  { collection: "originals" }
);

module.exports =
  mongoose.models.Originals || mongoose.model("Originals", OriginalsSchema);
