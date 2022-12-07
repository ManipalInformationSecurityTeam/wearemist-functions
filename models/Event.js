import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    name: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true,
        default: "An event by Manipal Information Security Team"
    },
    speakers: {
        type: Array,
        default: []
    },
    isInternal: {
        type: Boolean,
        default: false
    },
    tags: {
        type: Array,
        default: []
    },
    venue: {
        type: String,
        default: ""
    },
    platform: {
        type: String
    },
    registerLink: {
        type: String
    },
    startDate: {
        type: Date,
        required: true,
        default: new Date()
    },
    endDate: {
        type: Date
    }
  },
  { collection: "events" }
);

module.exports =
  mongoose.models.Events || mongoose.model("Events", EventSchema);