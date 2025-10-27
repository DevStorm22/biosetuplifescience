import Admin from "../models/admin.js";
export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAdmin = async (req, res) => {
  const admin = req.body;
  const newAdmin = new Admin(admin);
  try {
    await newAdmin.save();
    res.status(200).json(newAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAdmin = async (req, res) => {
  const { userName } = req.params;
  const admin = req.body;
  const updatedAdmin = await Admin.findOneAndUpdate({ userName }, admin, {
    new: true,
  });
  res.status(200).json(updatedAdmin);
};

export const deleteAdmin = async (req, res) => {
  const { userName } = req.params;
  const deletedAdmin = await Admin.findOneAndDelete({ userName });
  res.status(200).json(deletedAdmin);
};
