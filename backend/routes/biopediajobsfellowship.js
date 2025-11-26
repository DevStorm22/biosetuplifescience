import express from "express";
import {
  getBiopediajobsfellowship,
  createBiopediajobsfellowship,
  updateBiopediajobsfellowship,
  deleteBiopediajobsfellowship,
} from "../controllers/biopediajobsfellowship.js";

const router = express.Router();

router.get("/", getBiopediajobsfellowship);

router.post("/create", createBiopediajobsfellowship);

router.patch("/update/:id", updateBiopediajobsfellowship);

router.delete("/delete/:id", deleteBiopediajobsfellowship);

export default router;
