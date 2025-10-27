import express from "express";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blog.js";

const router = express.Router();

router.get("/", getBlogs);

router.post("/create", createBlog);

router.put("/update/:title", updateBlog);

router.delete("/delete/:title", deleteBlog);

export default router;
