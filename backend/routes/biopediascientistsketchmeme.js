import express from "express";
import {
  getBiopediascientistsketchmeme,
  createBiopediascientistsketchmeme,
  updateBiopediascientistsketchmeme,
  deleteBiopediascientistsketchmeme,
} from "../controllers/biopediascientistsketchmeme.js";

const router = express.Router();

router.get("/", getBiopediascientistsketchmeme);

router.post("/create", createBiopediascientistsketchmeme);

router.put("/update/:title", updateBiopediascientistsketchmeme);

router.delete("/delete/:title", deleteBiopediascientistsketchmeme);

export default router;
