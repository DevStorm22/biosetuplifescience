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
router.patch("/update/:id", updateBiopediaquiz);
router.delete("/delete/:id", deleteBiopediaquiz);

export default router;
