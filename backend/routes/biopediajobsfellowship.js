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

router.put("/update/:title", updateBiopediajobsfellowship);

router.delete("/delete/:title", deleteBiopediajobsfellowship);

export default router;
