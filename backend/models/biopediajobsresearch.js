import mongoose from "mongoose";

const biopediajobsresearchSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
});

const Biopediajobsresearch = mongoose.model(
  "Biopediajobsresearch",
  biopediajobsresearchSchema
);

export default Biopediajobsresearch;
