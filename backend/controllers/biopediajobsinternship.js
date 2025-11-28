import Biopediajobsinternship from "../models/biopediajobsinternship.js";

export const getBiopediajobsinternship = async (req, res) => {
  try {
    const data = await Biopediajobsinternship.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
};

export const createBiopediajobsinternship = async (req, res) => {
  try {
    const newJob = new Biopediajobsinternship(req.body);
    await newJob.save();
    res.status(201).json({ message: "Job added", newJob });
  } catch (err) {
    res.status(500).json({ message: "Error adding job" });
  }
};

export const updateBiopediajobsinternship = async (req, res) => {
  try {
    const { id } = req.params;
    const biopediajobsinternship = req.body;

    const updatedBiopediajobsinternship =
      await Biopediajobsinternship.findByIdAndUpdate(id, biopediajobsinternship, {
        new: true,
      });

    if (!updatedBiopediajobsinternship) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(updatedBiopediajobsinternship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBiopediajobsinternship = async (req, res) => {
  try {
    const deleted = await Biopediajobsinternship.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting job" });
  }
};
