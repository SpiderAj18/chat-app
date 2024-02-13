import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

const protectRoutes = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json("UNORTHORIZED NO TOKEN PROVIDED");
    }
    const decoded = jwt.verify(token,process.env.SECRET)
    if(!decoded){
        return res.status(401).json({error:"UNORTHORIZED - INVALID TOKEN"})
    }

    const user = await User.findById(decoded.userId).select("-password")

    if(!user){
      return res.status(404).json({error:"User not found"});
  }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error while sending message in protectRoutes");
    res.status(500).json({ error: "Internal server error" });
  }
};
export default protectRoutes;
