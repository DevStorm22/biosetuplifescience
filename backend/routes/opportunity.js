import express from "express";

import {
  getOpportunities,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
} from "../controllers/opportunity.js";

const router = express.Router();

router.get("/", getOpportunities);

router.post("/create", createOpportunity);

router.put("/update/:title", updateOpportunity);

router.delete("/delete/:title", deleteOpportunity);

export default router;
