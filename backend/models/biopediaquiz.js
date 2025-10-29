import mongoose from "mongoose";

const biopediaquizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    question1: { type: String, required: true },
    question2: { type: String, required: true },
    question3: { type: String, required: true },
    question4: { type: String, required: true },
    question5: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Biopediaquiz = mongoose.model("Biopediaquiz", biopediaquizSchema);
export default Biopediaquiz;
