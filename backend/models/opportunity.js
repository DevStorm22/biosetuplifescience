import mongoose from "mongoose";

const opportunitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Opportunity = mongoose.model("Opportunity", opportunitySchema);
export default Opportunity;
