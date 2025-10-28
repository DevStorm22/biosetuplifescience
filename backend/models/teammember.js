import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    instagramId: { type: String },
    linkedinId: { type: String },
    phone: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);
export default TeamMember;
