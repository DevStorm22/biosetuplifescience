import express from "express";
import {
  getBiopediajobspharma,
  createBiopediajobspharma,
  updateBiopediajobspharma,
  deleteBiopediajobspharma,
} from "../controllers/biopediajobspharma.js";

const router = express.Router();

router.get("/", getBiopediajobspharma);

router.post("/create", createBiopediajobspharma);

router.patch("/update/:id", updateBiopediajobspharma);

router.delete("/delete/:id", deleteBiopediajobspharma);

export default router;
