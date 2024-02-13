import { User } from "../models/user.models.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const logedInUser = req.user._id;

    const allUser = await User.find({ _id: { $ne: logedInUser } }).select("-password");

    res.status(200).json({allUser})
  } catch (error) {
    console.log(error, "error in getUsersForSidebar");
    res.status(500).json({ error: "Internal server Error in sideUserBar" });
  }
};

export { getUsersForSidebar };
