import mongoose from "mongoose";
import users from "../models/userSchema.js";

export const updateChanelData = async (req, res) => {
  const { id } = req.params;
  const { name, desc } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Channel Unavailable...");
  }

  try {
    const updateData = await users.findByIdAndUpdate(
      id,
      {
        $set: {
          name: name,
          desc: desc,
        },
      },
      { new: true }
    );

    // Use 200 for success
    res.status(200).json(updateData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllChanels = async (req, res) => {
  try {
    const allChanels = await users.find();
    const allChanelDetails = [];
    allChanels.forEach((chanel) => {
      allChanelDetails.push({
        _id: chanel._id,
        name: chanel.name,
        email: chanel.email,
        desc: chanel.desc,
      });
    });
    res.status(200).json(allChanelDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
