import mongoose from "mongoose";

const ShowcaseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    achiever: {
      type: String,
      required: [true, "Title is required"],
    },
    image: {
      type: String,
      default:
        "https://png.pngtree.com/png-vector/20191029/ourmid/pngtree-first-prize-gold-trophy-icon-prize-gold-trophy-winner-first-prize-png-image_1908592.jpg",
    },
    position: {
      type: String,
      required: [true, "Position is required"],
    },
  },
  { collection: "showcases" }
);

module.exports =
  mongoose.models.Showcase || mongoose.model("Showcase", ShowcaseSchema);
