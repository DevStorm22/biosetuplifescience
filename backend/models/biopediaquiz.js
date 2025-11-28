import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: {
    type: [String],
    validate: {
      validator: function (val) {
        return val.length === 4;
      },
      message: "Each question must have exactly 4 options",
    },
  },
});

const biopediaquizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    questions: {
      type: [questionSchema],
      validate: {
        validator: function (val) {
          return val.length === 5; // EXACTLY 5 questions
        },
        message: "Quiz must have exactly 5 questions",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Biopediaquiz", biopediaquizSchema);
