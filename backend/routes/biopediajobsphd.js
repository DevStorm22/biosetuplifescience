import express from "express";
import {
  getBiopediajobsphd,
  createBiopediajobsphd,
  updateBiopediajobsphd,
  deleteBiopediajobsphd,
} from "../controllers/biopediajobsphd.js";

const router = express.Router();

router.get("/", getBiopediajobsphd);

router.post("/create", createBiopediajobsphd);

router.patch("/update/:id", updateBiopediajobsphd);

router.delete("/delete/:id", deleteBiopediajobsphd);

export default router;
