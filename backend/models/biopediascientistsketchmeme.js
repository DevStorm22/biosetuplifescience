import mongoose from "mongoose";

const biopediascientistsketchmemeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    meme: { type: String, required: true },
  },
  { timestamps: true }
);

const Biopediascientistsketchmeme = mongoose.model(
  "Biopediascientistsketchmeme",
  biopediascientistsketchmemeSchema
);

export default Biopediascientistsketchmeme;
