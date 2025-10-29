import Biopediajobsresearch from "../models/biopediajobsresearch.js";

export const getBiopediajobsresearch = async (req, res) => {
  try {
    const biopediajobsresearch = await Biopediajobsresearch.find();
    res.status(200).json(biopediajobsresearch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBiopediajobsresearch = async (req, res) => {
  const biopediajobsresearch = req.body;
  const newBiopediajobsresearch = new Biopediajobsresearch(
    biopediajobsresearch
  );
  try {
    await newBiopediajobsresearch.save();
    res.status(200).json(newBiopediajobsresearch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBiopediajobsresearch = async (req, res) => {
  const { title } = req.params;
  const biopediajobsresearch = req.body;
  const updatedBiopediajobsresearch =
    await Biopediajobsresearch.findOneAndUpdate(
      { title },
      biopediajobsresearch,
      { new: true }
    );
  res.status(200).json(updatedBiopediajobsresearch);
};

export const deleteBiopediajobsresearch = async (req, res) => {
  const { title } = req.params;
  const deleteBiopediajobsresearch =
    await Biopediajobsresearch.findOneAndDelete({ title });
  res.status(200).json(deleteBiopediajobsresearch);
};
