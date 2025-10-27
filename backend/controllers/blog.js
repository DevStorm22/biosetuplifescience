import Blog from "../models/blog.js";
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  const blog = req.body;
  const newBlog = new Blog(blog);
  try {
    await newBlog.save();
    res.status(200).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  const { title } = req.params;
  const blog = req.body;
  const updatedBlog = await Blog.findOneAndUpdate({ title }, blog, {
    new: true,
  });
  res.status(200).json(updatedBlog);
};

export const deleteBlog = async (req, res) => {
  const { title } = req.params;
  try {
    const deletedBlog = await Blog.findOneAndDelete({ title });
    res.status(200).json(deletedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
