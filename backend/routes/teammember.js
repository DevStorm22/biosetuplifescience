import express from "express";
import {
  getTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "../controllers/teammember.js";

const router = express.Router();

router.get("/", getTeamMembers);

router.post("/create", createTeamMember);

router.put("/update/:userName", updateTeamMember);

router.delete("/delete/:userName", deleteTeamMember);

export default router;
