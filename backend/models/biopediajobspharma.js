import mongoose from "mongoose";

const biopediajobspharmaSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
});

const Biopediajobspharma = mongoose.model(
  "Biopediajobspharma",
  biopediajobspharmaSchema
);

export default Biopediajobspharma;
