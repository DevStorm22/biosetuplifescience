import Biopediaquiz from "../models/biopediaquiz.js";

export const getBiopediaquiz = async (req, res) => {
  try {
    const biopediaquiz = await Biopediaquiz.find();
    res.status(200).json(biopediaquiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBiopediaquiz = async (req, res) => {
  const biopediaquiz = req.body;
  const newBiopediaquiz = new Biopediaquiz(biopediaquiz);
  try {
    await newBiopediaquiz.save();
    res.status(200).json(newBiopediaquiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBiopediaquiz = async (req, res) => {
  const { title } = req.params;
  const biopediaquiz = req.body;
  const updatedBiopediaquiz = await Biopediaquiz.findOneAndUpdate(
    { title },
    biopediaquiz,
    { new: true }
  );
  res.status(200).json(updatedBiopediaquiz);
};

export const deleteBiopediaquiz = async (req, res) => {
  const { title } = req.params;
  const deletedBiopediaquiz = await Biopediaquiz.findOneAndDelete({ title });
  res.status(200).json(deletedBiopediaquiz);
};
