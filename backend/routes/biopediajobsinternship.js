import express from "express";
import {
  getBiopediajobsinternship,
  createBiopediajobsinternship,
  updateBiopediajobsinternship,
  deleteBiopediajobsinternship,
} from "../controllers/biopediajobsinternship.js";

const router = express.Router();

router.get("/", getBiopediajobsinternship);

router.post("/create", createBiopediajobsinternship);

router.put("/update/:title", updateBiopediajobsinternship);

router.delete("/delete/:title", deleteBiopediajobsinternship);

export default router;
