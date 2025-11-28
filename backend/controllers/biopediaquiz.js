import Biopediaquiz from "../models/biopediaquiz.js";

export const getBiopediaquiz = async (req, res) => {
  try {
    const data = await Biopediaquiz.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching quiz data" });
  }
};

export const createBiopediaquiz = async (req, res) => {
  try {
    const newQuiz = new Biopediaquiz(req.body);
    await newQuiz.save();

    res.status(201).json({ message: "Quiz created", newQuiz });
  } catch (err) {
    res.status(500).json({
      message: "Error creating quiz",
      error: err.message,
    });
  }
};

export const updateBiopediaquiz = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedQuiz = await Biopediaquiz.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedQuiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.status(200).json(updatedQuiz);
  } catch (err) {
    res.status(500).json({ message: "Error updating quiz" });
  }
};

export const deleteBiopediaquiz = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedQuiz = await Biopediaquiz.findByIdAndDelete(id);

    if (!deletedQuiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.status(200).json({ message: "Quiz deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting quiz" });
  }
};
