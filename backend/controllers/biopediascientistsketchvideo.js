import Biopediascientistsketchvideo from "../models/biopediascientistsketchvideo.js";

export const getBiopediascientistsketchvideo = async (req, res) => {
  try {
    const biopediascientistsketchvideos =
      await Biopediascientistsketchvideo.find();
    res.status(200).json(biopediascientistsketchvideos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBiopediascientistsketchvideo = async (req, res) => {
  const biopediascientistsketchvideo = req.body;
  const newBiopediascientistsketchvideo = new Biopediascientistsketchvideo(
    biopediascientistsketchvideo
  );
  try {
    await newBiopediascientistsketchvideo.save();
    res.status(200).json(newBiopediascientistsketchvideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBiopediascientistsketchvideo = async (req, res) => {
  const { title } = req.params;
  const biopediascientistsketchvideo = req.body;
  const updatedBiopediascientistsketchvideo =
    await Biopediascientistsketchvideo.findOneAndUpdate(
      { title },
      biopediascientistsketchvideo,
      {
        new: true,
      }
    );
  res.status(200).json(updatedBiopediascientistsketchvideo);
};

export const deleteBiopediascientistsketchvideo = async (req, res) => {
  const { title } = req.params;
  const deletedBiopediascientistsketchvideo =
    await Biopediascientistsketchvideo.findOneAndDelete({ title });
  res.status(200).json(deletedBiopediascientistsketchvideo);
};
