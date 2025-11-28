import express from "express";
import {
  getBiopediascientistsketchmeme,
  createBiopediascientistsketchmeme,
  updateBiopediascientistsketchmeme,
  deleteBiopediascientistsketchmeme,
  uploadMeme,
} from "../controllers/biopediascientistsketchmeme.js";

const router = express.Router();

router.get("/", getBiopediascientistsketchmeme);
router.post("/create", uploadMeme, createBiopediascientistsketchmeme);
router.patch("/update/:id", updateBiopediascientistsketchmeme);
router.delete("/delete/:id", deleteBiopediascientistsketchmeme);

export default router;
