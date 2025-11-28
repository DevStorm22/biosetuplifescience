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

router.patch("/update/:id", updateBiopediajobsinternship);

router.delete("/delete/:id", deleteBiopediajobsinternship);

export default router;
