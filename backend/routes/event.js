import express from "express";

import {
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/event.js";

const router = express.Router();

router.get("/", getEvent);

router.post("/create", createEvent);

router.put("/update/:title", updateEvent);

router.delete("/delete/:title", deleteEvent);

export default router;
