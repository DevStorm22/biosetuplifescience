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

router.put("/update/:title", updateBiopediajobsphd);

router.delete("/delete/:title", deleteBiopediajobsphd);

export default router;
