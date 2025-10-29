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

router.put("/update/:title", updateBiopediajobspharma);

router.delete("/delete/:title", deleteBiopediajobspharma);

export default router;
