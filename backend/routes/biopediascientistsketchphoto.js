import express from "express";
import {
  getBiopediascientistsketchphoto,
  createBiopediascientistsketchphoto,
  updateBiopediascientistsketchphoto,
  deleteBiopediascientistsketchphoto,
} from "../controllers/biopediascientistsketchphoto.js";

const router = express.Router();

router.get("/", getBiopediascientistsketchphoto);

router.post("/create", createBiopediascientistsketchphoto);

router.put("/update/:title", updateBiopediascientistsketchphoto);

router.delete("/delete/:title", deleteBiopediascientistsketchphoto);

export default router;
