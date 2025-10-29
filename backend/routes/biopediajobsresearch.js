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

router.put("/update/:title", updateBiopediajobsresearch);

router.delete("/delete/:title", deleteBiopediajobsresearch);

export default router;
