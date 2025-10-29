import mongoose from "mongoose";

const biopediajobsphdSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

const Biopediajobsphd = mongoose.model(
  "Biopediajobsphd",
  biopediajobsphdSchema
);
export default Biopediajobsphd;
