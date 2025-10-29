import Biopediajobspharma from "../models/biopediajobspharma.js";
export const getBiopediajobspharma = async (req, res) => {
  try {
    const biopediajobspharma = await Biopediajobspharma.find();
    res.status(200).json(biopediajobspharma);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBiopediajobspharma = async (req, res) => {
  const biopediajobspharma = req.body;
  const newBiopediajobspharma = new Biopediajobspharma(biopediajobspharma);
  try {
    await newBiopediajobspharma.save();
    res.status(200).json(newBiopediajobspharma);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBiopediajobspharma = async (req, res) => {
  const { title } = req.params;
  const biopediajobspharma = req.body;
  const updatedBiopediajobspharma = await Biopediajobspharma.findOneAndUpdate(
    { title },
    biopediajobspharma,
    { new: true }
  );
  res.status(200).json(updatedBiopediajobspharma);
};

export const deleteBiopediajobspharma = async (req, res) => {
  const { title } = req.params;
  const deletedBiopediajobspharma = await Biopediajobspharma.findOneAndDelete({
    title,
  });
  res.status(200).json(deletedBiopediajobspharma);
};
