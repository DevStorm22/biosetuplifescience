import express from "express";
import {
  getBiopediajobsresearch,
  createBiopediajobsresearch,
  updateBiopediajobsresearch,
  deleteBiopediajobsresearch,
} from "../controllers/biopediajobsresearch.js";

const router = express.Router();

router.get("/", getBiopediajobsresearch);

router.post("/create", createBiopediajobsresearch);

router.patch("/update/:id", updateBiopediajobsresearch);

router.delete("/delete/:id", deleteBiopediajobsresearch);

export default router;
