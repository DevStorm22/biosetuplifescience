import Newsletter from "../models/Newsletter.js";
export const getNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find();
    res.status(200).json(newsletters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createNewsletter = async (req, res) => {
  const newsletter = req.body;
  const newNewsletter = new Newsletter(newsletter);
  try {
    await newNewsletter.save();
    res.status(200).json(newNewsletter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateNewsletter = async (req, res) => {
  const { title } = req.params;
  const newsletter = req.body;
  const updatedNewsletter = await Newsletter.findOneAndUpdate(
    { title },
    newsletter,
    {
      new: true,
    }
  );
  res.status(200).json(updatedNewsletter);
};

export const deleteNewsletter = async (req, res) => {
  const { title } = req.params;
  try {
    const deletedNewsletter = await Newsletter.findOneAndDelete({ title });
    res.status(200).json(deletedNewsletter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
