import Biopediajobsphd from "../models/biopediajobsphd.js";

export const getBiopediajobsphd = async (req, res) => {
  try {
    const biopediajobsphd = await Biopediajobsphd.find();
    res.status(200).json(biopediajobsphd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBiopediajobsphd = async (req, res) => {
  const biopediajobsphd = req.body;
  const newBiopediajobsphd = new Biopediajobsphd(biopediajobsphd);
  try {
    await newBiopediajobsphd.save();
    res.status(200).json(newBiopediajobsphd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBiopediajobsphd = async (req, res) => {
  const { title } = req.params;
  const biopediajobsphd = req.body;
  const updatedBiopediajobsphd = await Biopediajobsphd.findOneAndUpdate(
    { title },
    biopediajobsphd,
    { new: true }
  );
  res.status(200).json(updatedBiopediajobsphd);
};

export const deleteBiopediajobsphd = async (req, res) => {
  const { title } = req.params;
  const deletedBiopediajobsphd = await Biopediajobsphd.findOneAndDelete({
    title,
  });
  res.status(200).json(deletedBiopediajobsphd);
};
