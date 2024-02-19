import bcryptjs from "bcryptjs";
import { User } from "../models/user.models.js";
import generateToken from "../utils/generateToken.js";


//signup controller
const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    //matching password and confirm password feilds
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "password and confirm password field do not match" });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    //HASH PASSWORD HERE
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    //profile pic
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //generate jwt token
       generateToken(newUser._id,res)
      await newUser.save();
      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(500).json({ error: "invalid user data " });
    }
  } catch (error) {
    console.log("Error while registering user ", error);
    res.status(500).json("internal server error while registering");
  }
};


//login controller
const loginUser = async (req, res) => {
  try {
    const {userName,password} = req.body
    console.log(req.body)
    const user = await User.findOne({userName})
    if(!user){
      return res.status(400).json("invalid credentials")
    }
    const isPasswordCorrect = await bcryptjs.compare(password,user.password || "")
    if(!isPasswordCorrect){
        return res.status(400).json({error:"invalid credentials"})
    }       
    const token = generateToken(user._id,res);
    
    res.cookie(token,{
       maxAge: 3 * 24 * 60 * 60 * 1000,
      httpOnly: true,}).status(200).json({
        _id:user._id,
        fullName:user.fullName,
        userName:user.userName,
        profilePic:user.profilePic

    })

  } catch (error) {
    console.log("Error while login user",error)
    res.status(500).json({error:"internal server error while login"})

  }

};

//logoutcontroller
const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json("Logout successfully")
  } catch (error) {
    console.log("Internal server error while logout")
    res.status(400).json({error:"Internal server error while logout"})
  }
  
};

export { registerUser, loginUser, logoutUser };
