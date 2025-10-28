import Opportunity from "../models/opportunity.js";
export const getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find();
    res.status(200).json(opportunities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOpportunity = async (req, res) => {
  const opportunity = req.body;
  const newOpportunity = new Opportunity(opportunity);
  try {
    await newOpportunity.save();
    res.status(200).json(newOpportunity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOpportunity = async (req, res) => {
  const { title } = req.params;
  const opportunity = req.body;
  const updatedOpportunity = await Opportunity.findOneAndUpdate(
    { title },
    opportunity,
    {
      new: true,
    }
  );
  res.status(200).json(updatedOpportunity);
};

export const deleteOpportunity = async (req, res) => {
  const { title } = req.params;
  const deletedOpportunity = await Opportunity.findOneAndDelete({ title });
  res.status(200).json(deletedOpportunity);
};
