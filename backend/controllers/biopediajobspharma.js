import Biopediajobspharma from "../models/biopediajobspharma.js";

export const getBiopediajobspharma = async (req, res) => {
  try {
    const data = await Biopediajobspharma.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
};

export const createBiopediajobspharma = async (req, res) => {
  try {
    const newJob = new Biopediajobspharma(req.body);
    await newJob.save();
    res.status(201).json({ message: "Job added", newJob });
  } catch (err) {
    res.status(500).json({ message: "Error adding job" });
  }
};

export const updateBiopediajobspharma = async (req, res) => {
  try {
    const { id } = req.params;
    const biopediajobspharma = req.body;

    const updatedBiopediajobspharma =
      await Biopediajobspharma.findByIdAndUpdate(id, biopediajobspharma, {
        new: true,
      });

    if (!updatedBiopediajobspharma) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(updatedBiopediajobspharma);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBiopediajobspharma = async (req, res) => {
  try {
    const deleted = await Biopediajobspharma.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting job" });
  }
};
