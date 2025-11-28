import mongoose from "mongoose";
const biopediajobsinternshipSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
});

export const Biopediajobsinternship = mongoose.model(
  "Biopediajobsinternship",
  biopediajobsinternshipSchema
);
export default Biopediajobsinternship;
