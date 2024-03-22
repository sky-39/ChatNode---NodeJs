import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    return res.status(200).json(filteredUsers);
  } catch (err) {
    console.log("Error in ger user for sidebar controller", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
