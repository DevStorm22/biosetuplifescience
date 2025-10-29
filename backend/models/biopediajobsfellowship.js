import mongoose from "mongoose";
const biopediajobsfellowshipSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
  },
  { timestamps: true }
);

const Biopediajobsfellowship = mongoose.model(
  "Biopediajobsfellowship",
  biopediajobsfellowshipSchema
);
export default Biopediajobsfellowship;
