import TeamMember from "../models/teammember.js";
export const getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTeamMember = async (req, res) => {
  const teamMember = req.body;
  const newTeamMember = new TeamMember(teamMember);
  try {
    await newTeamMember.save();
    res.status(200).json(newTeamMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTeamMember = async (req, res) => {
  const { userName } = req.params;
  const teamMember = req.body;
  const updatedTeamMember = await TeamMember.findOneAndUpdate(
    { userName },
    teamMember,
    {
      new: true,
    }
  );
  res.status(200).json(updatedTeamMember);
};

export const deleteTeamMember = async (req, res) => {
  const { userName } = req.params;
  const deletedTeamMember = await TeamMember.findOneAndDelete({ userName });
  res.status(200).json(deletedTeamMember);
};
