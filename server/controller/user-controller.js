import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../model/User.js";

const secret = 'test';

export const login = async (req, res) => {
  const { email, password,username } = req.body;
  console.log(req.body);

  try {
    const oldUser = await UserModal.findOne({ email });
    const oldUsername=await UserModal.findOne({username});
   

    if (!oldUser || !oldUsername) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password,username } = req.body;
  console.log(req.body);

  try {
    const oldUser = await UserModal.findOne({ email });
    const oldUsername=await UserModal.findOne({username});
    if (oldUser) return res.status(400).json({ message: "User already exists" });
    if(oldUsername) return res.status(400).json({message:"This username is already taken try another one"});

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword,username });
    console.log(result);

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};