import mongoose from "mongoose";

const BiopediascientistsketchvideoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    video: { type: String, required: true },
  },
  { timestamps: true }
);

const Biopediascientistsketchvideo = mongoose.model(
  "Biopediascientistsketchvideo",
  BiopediascientistsketchvideoSchema
);
export default Biopediascientistsketchvideo;
