import mongoose from "mongoose";

const BiopediajobsresearchSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

const Biopediajobsresearch = mongoose.model(
  "Biopediajobsresearch",
  BiopediajobsresearchSchema
);
export default Biopediajobsresearch;
