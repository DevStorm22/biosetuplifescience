import express from "express";
import {
  getNewsletters,
  createNewsletter,
  updateNewsletter,
  deleteNewsletter,
} from "../controllers/newsletter.js";

const router = express.Router();

router.get("/", getNewsletters);

router.post("/create", createNewsletter);

router.put("/update/:title", updateNewsletter);

router.delete("/delete/:title", deleteNewsletter);

export default router;
