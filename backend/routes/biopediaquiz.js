import express from "express";
import {
  getBiopediaquiz,
  createBiopediaquiz,
  updateBiopediaquiz,
  deleteBiopediaquiz,
} from "../controllers/biopediaquiz.js";

const router = express.Router();

router.get("/", getBiopediaquiz);

router.post("/create", createBiopediaquiz);

router.put("/update/:title", updateBiopediaquiz);

router.delete("/delete/:title", deleteBiopediaquiz);

export default router;
