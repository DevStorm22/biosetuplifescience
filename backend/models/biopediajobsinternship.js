import mongoose from "mongoose";

export const getBiopediajobsinternshipSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
});

export const Biopediajobsinternship = mongoose.model(
  "Biopediajobsinternship",
  getBiopediajobsinternshipSchema
);
export default Biopediajobsinternship;
