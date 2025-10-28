import Biopediascientistsketchmeme from "../models/biopediascientistsketchmeme.js";
export const getBiopediascientistsketchmeme = async (req, res) => {
  try {
    const biopediascientistsketchmemes =
      await Biopediascientistsketchmeme.find();
    res.status(200).json(biopediascientistsketchmemes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBiopediascientistsketchmeme = async (req, res) => {
  const biopediascientistsketchmeme = req.body;
  const newBiopediascientistsketchmeme = new Biopediascientistsketchmeme(
    biopediascientistsketchmeme
  );
  try {
    const createdBiopediascientistsketchmeme =
      await newBiopediascientistsketchmeme.save();
    res.status(200).json(createdBiopediascientistsketchmeme);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBiopediascientistsketchmeme = async (req, res) => {
  const { title } = req.params;
  const biopediascientistsketchmeme = req.body;
  const updatedBiopediascientistsketchmeme =
    await Biopediascientistsketchmeme.findOneAndUpdate(
      { title },
      biopediascientistsketchmeme,
      { new: true }
    );
  res.status(200).json(updatedBiopediascientistsketchmeme);
};

export const deleteBiopediascientistsketchmeme = async (req, res) => {
  const { title } = req.params;
  const deleteBiopediascientistsketchmeme =
    await Biopediascientistsketchmeme.findOneAndDelete({ title });
  res.status(200).json(deleteBiopediascientistsketchmeme);
};
