import mongoose from "mongoose";

const biopediascientistsketchphotoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
  },
  { timestamps: true }
);

const Biopediascientistsketchphoto = mongoose.model(
  "Biopediascientistsketchphoto",
  biopediascientistsketchphotoSchema
);
export default Biopediascientistsketchphoto;
