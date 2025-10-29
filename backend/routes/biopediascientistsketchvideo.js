import express from "express";
import {
  getBiopediascientistsketchvideo,
  createBiopediascientistsketchvideo,
  updateBiopediascientistsketchvideo,
  deleteBiopediascientistsketchvideo,
} from "../controllers/biopediascientistsketchvideo.js";

const router = express.Router();

router.get("/", getBiopediascientistsketchvideo);

router.post("/create", createBiopediascientistsketchvideo);

router.put("/update/:title", updateBiopediascientistsketchvideo);

router.delete("/delete/:title", deleteBiopediascientistsketchvideo);

export default router;
