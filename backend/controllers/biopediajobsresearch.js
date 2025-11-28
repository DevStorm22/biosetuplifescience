import Biopediajobsresearch from "../models/biopediajobsresearch.js";

export const getBiopediajobsresearch = async (req, res) => {
  try {
    const data = await Biopediajobsresearch.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
};

export const createBiopediajobsresearch = async (req, res) => {
  try {
    const newJob = new Biopediajobsresearch(req.body);
    await newJob.save();
    res.status(201).json({ message: "Job added", newJob });
  } catch (err) {
    res.status(500).json({ message: "Error adding job" });
  }
};

export const updateBiopediajobsresearch = async (req, res) => {
  try {
    const { id } = req.params;
    const biopediajobsresearch = req.body;

    const updatedBiopediajobsresearch =
      await Biopediajobsresearch.findByIdAndUpdate(id, biopediajobsresearch, {
        new: true,
      });

    if (!updatedBiopediajobsresearch) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(updatedBiopediajobsresearch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBiopediajobsresearch = async (req, res) => {
  try {
    const deleted = await Biopediajobsresearch.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting job" });
  }
};
