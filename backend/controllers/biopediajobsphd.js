import Biopediajobsphd from "../models/biopediajobsphd.js";

export const getBiopediajobsphd = async (req, res) => {
  try {
    const data = await Biopediajobsphd.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
};

export const createBiopediajobsphd = async (req, res) => {
  try {
    const newJob = new Biopediajobsphd(req.body);
    await newJob.save();
    res.status(201).json({ message: "Job added", newJob });
  } catch (err) {
    res.status(500).json({ message: "Error adding job" });
  }
};

export const updateBiopediajobsphd = async (req, res) => {
  try {
    const { id } = req.params;
    const biopediajobsphd = req.body;

    const updatedBiopediajobsphd =
      await Biopediajobsphd.findByIdAndUpdate(id, biopediajobsphd, {
        new: true,
      });

    if (!updatedBiopediajobsphd) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(updatedBiopediajobsphd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBiopediajobsphd = async (req, res) => {
  try {
    const deleted = await Biopediajobsphd.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting job" });
  }
};
