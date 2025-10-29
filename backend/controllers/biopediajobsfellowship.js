import Biopediajobsfellowship from "../models/biopediajobsfellowship.js";
export const getBiopediajobsfellowship = async (req, res) => {
  try {
    const biopediajobsfellowships = await Biopediajobsfellowship.find();
    res.status(200).json(biopediajobsfellowships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBiopediajobsfellowship = async (req, res) => {
  const biopediajobsfellowship = req.body;
  const newBiopediajobsfellowship = new Biopediajobsfellowship(
    biopediajobsfellowship
  );
  try {
    await newBiopediajobsfellowship.save();
    res.status(200).json(newBiopediajobsfellowship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBiopediajobsfellowship = async (req, res) => {
  const { title } = req.params;
  const biopediajobsfellowship = req.body;
  const updatedBiopediajobsfellowship =
    await Biopediajobsfellowship.findOneAndUpdate(
      { title },
      biopediajobsfellowship,
      { new: true }
    );
  res.status(200).json(updatedBiopediajobsfellowship);
};

export const deleteBiopediajobsfellowship = async (req, res) => {
  const { title } = req.params;
  const deletedBiopediajobsfellowship =
    await Biopediajobsfellowship.findOneAndDelete({ title });
  res.status(200).json(deletedBiopediajobsfellowship);
};
