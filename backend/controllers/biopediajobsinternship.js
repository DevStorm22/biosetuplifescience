import Biopediajobsinternship from "../models/biopediajobsinternship.js";
export const getBiopediajobsinternship = async (req, res) => {
  try {
    const biopediajobsinternships = await Biopediajobsinternship.find();
    res.status(200).json(biopediajobsinternships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBiopediajobsinternship = async (req, res) => {
  const biopediajobsinternship = req.body;
  const newBiopediajobsinternship = new Biopediajobsinternship(
    biopediajobsinternship
  );
  try {
    await newBiopediajobsinternship.save();
    res.status(200).json(newBiopediajobsinternship);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Duplicate entry detected." });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

export const updateBiopediajobsinternship = async (req, res) => {
  const { title } = req.params;
  const biopediajobsinternship = req.body;
  const updatedBiopediajobsinternship =
    await Biopediajobsinternship.findOneAndUpdate(
      { title },
      biopediajobsinternship,
      { new: true }
    );
  res.status(200).json(updatedBiopediajobsinternship);
};

export const deleteBiopediajobsinternship = async (req, res) => {
  const { title } = req.params;
  const deletedBiopediajobsinternship =
    await Biopediajobsinternship.findOneAndDelete({ title });
  res.status(200).json(deletedBiopediajobsinternship);
};
