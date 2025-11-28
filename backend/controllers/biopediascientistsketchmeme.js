import Biopediascientistsketchmeme from "../models/biopediascientistsketchmeme.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "uploads/meme/";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

export const uploadMeme = multer({ storage }).single("meme");

export const getBiopediascientistsketchmeme = async (req, res) => {
  try {
    const memes = await Biopediascientistsketchmeme.find();
    res.status(200).json(memes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createBiopediascientistsketchmeme = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title || !req.file)
      return res.status(400).json({ message: "Title and meme file required" });

    const newMeme = new Biopediascientistsketchmeme({
      title,
      meme: req.file.path,
    });

    const savedMeme = await newMeme.save();
    res.status(201).json(savedMeme);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateBiopediascientistsketchmeme = async (req, res) => {
  try {
    const { id } = req.params;
    const existingMeme = await Biopediascientistsketchmeme.findById(id);
    if (!existingMeme) return res.status(404).json({ message: "Meme not found" });

    const updateData = {};
    if (req.body.title) updateData.title = req.body.title;

    if (req.file) {
      updateData.meme = req.file.path;

      if (existingMeme.meme && fs.existsSync(existingMeme.meme)) {
        fs.unlinkSync(existingMeme.meme);
      }
    }

    const updatedMeme = await Biopediascientistsketchmeme.findByIdAndUpdate(id, updateData, { new: true });
    res.status(200).json(updatedMeme);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteBiopediascientistsketchmeme = async (req, res) => {
  try {
    const { id } = req.params;
    const memeToDelete = await Biopediascientistsketchmeme.findById(id);
    if (!memeToDelete) return res.status(404).json({ message: "Meme not found" });

    if (memeToDelete.meme && fs.existsSync(memeToDelete.meme)) {
      fs.unlinkSync(memeToDelete.meme);
    }

    const deleted = await Biopediascientistsketchmeme.findByIdAndDelete(id);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
