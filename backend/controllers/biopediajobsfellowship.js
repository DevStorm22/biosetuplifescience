import Biopediajobsfellowship from "../models/biopediajobsfellowship.js";

export const getBiopediajobsfellowship = async (req, res) => {
  try {
    const data = await Biopediajobsfellowship.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
};

export const createBiopediajobsfellowship = async (req, res) => {
  try {
    const newJob = new Biopediajobsfellowship(req.body);
    await newJob.save();
    res.status(201).json({ message: "Job added", newJob });
  } catch (err) {
    res.status(500).json({ message: "Error adding job" });
  }
};

export const updateBiopediajobsfellowship = async (req, res) => {
  try {
    const { id } = req.params;
    const biopediajobsfellowship = req.body;

    const updatedBiopediajobsfellowship =
      await Biopediajobsfellowship.findByIdAndUpdate(id, biopediajobsfellowship, {
        new: true,
      });

    if (!updatedBiopediajobsfellowship) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(updatedBiopediajobsfellowship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBiopediajobsfellowship = async (req, res) => {
  try {
    const deleted = await Biopediajobsfellowship.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting job" });
  }
};
