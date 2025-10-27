import express from "express";
import {
  getAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} from "../controllers/admin.js";

const router = express.Router();

router.get("/", getAdmins);

router.post("/create", createAdmin);

router.put("/update/:userName", updateAdmin);

router.delete("/delete/:userName", deleteAdmin);

export default router;
