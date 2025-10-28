import Biopediascientistsketchphoto from "../models/biopediascientistsketchphoto.js";

export const getBiopediascientistsketchphoto = async (req, res) => {
  try {
    const biopediascientistsketchphoto =
      await Biopediascientistsketchphoto.find();
    res.status(200).json(biopediascientistsketchphoto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBiopediascientistsketchphoto = async (req, res) => {
  const biopediascientistsketchphoto = req.body;
  const newBiopediascientistsketchphoto = new Biopediascientistsketchphoto(
    biopediascientistsketchphoto
  );
  try {
    await newBiopediascientistsketchphoto.save();
    res.status(200).json(newBiopediascientistsketchphoto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBiopediascientistsketchphoto = async (req, res) => {
  const { title } = req.params;
  const biopediascientistsketchphoto = req.body;
  const updatedBiopediascientistsketchphoto =
    await Biopediascientistsketchphoto.findOneAndUpdate(
      { title },
      biopediascientistsketchphoto,
      {
        new: true,
      }
    );
  res.status(200).json(updatedBiopediascientistsketchphoto);
};

export const deleteBiopediascientistsketchphoto = async (req, res) => {
  const { title } = req.params;
  const deletedBiopediascientistsketchphoto =
    await Biopediascientistsketchphoto.findOneAndDelete({ title });
  res.status(200).json(deletedBiopediascientistsketchphoto);
};
