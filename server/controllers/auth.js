const User = require("../models/user");
// const bcrypt = require("bcrypt");
const bcrypt = require('bcryptjs');

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Profile = require("../models/Profile");
// const user = require("../models/user");
// const profileDetails = require("../models/profileDetails");

dotenv.config();

//sugnup ka controller
exports.signup = async (req, res) => {
  //get details from req ki body

  try {
    const { fullName, email, phoneNo, password, confirmPassword } = req.body;

    //validation lga lo
    if (!fullName || !email || !phoneNo || !password || !confirmPassword) {
      res.status(401).json({
        success: false,
        message: "All fields are mendetory",
      });
    }

    //Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }
    //check if user is already exist or not
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res.status(400).json({
        success: false,
        message: "User already existed",
      });
    }

    //password ko incrypt kardo
    const encryptedPassword = await bcrypt.hash(password, 10);

    //create profile here and set it initially null
    const profileDetail = await Profile.create({
      organizationName: null,
      addressLine1: null,
      addressLine2: null,
      email: null,
      logo: null,
      shopGSTIN: null,
      about: null,
    });

    //make entry in database
    const user = await User.create({
      fullName,
      email,
      phoneNo,
      password: encryptedPassword,
      profileDetails: profileDetail._id,
    });

    // user.save();
    console.log("success", res);
    return res.status(200).json({
      success: true,
      message: "user signup successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unable to register user, Please try again",
    });
  }
};

exports.login = async (req, res) => {
  try {
    //get email and password
    const { email, password } = req.body;

    //validate teh attributes
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are mendetory",
      });
    }

    //check weather the user is present in the database or not
    const user = await User.findOne({ email }).populate("profileDetails");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Please register Yourself then login again",
      });
    }

    //if user is presesnt then generate teh token and store the token in user schema
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
          name: user.fullName,
          phoneNo: user.phoneNo,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      //save token in user model
      user.token = token;
      // await user.save();

      //create cookies and send success response
      res.cookie("token", token).status(200).json({
        success: true,
        message: "User logged in succesfully",
        user,
        token,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Password is Incorrect",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "login failed , please try again",
    });
  }
};

// const bcrypt = require("bcryptjs");
// const User = require("../models/User"); // Assuming the User model is imported here

exports.updatePassword = async (req, res) => {
  try {
    const { newPassword, confirmNewPassword, email } = req.body;

    // Validation
    if ( !newPassword || !confirmNewPassword || !email) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found, please create an account first",
      });
    }

    // Check if newPassword and confirmNewPassword match
    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: "New password and confirm password do not match",
      });
    }

    // Optionally, you can add current password validation here
    // const isMatch = await bcrypt.compare(currentPassword, user.password);
    // if (!isMatch) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Current password is incorrect",
    //   });
    // }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12); // 12 is the salt rounds

    // Update the password in the database
    await User.findByIdAndUpdate(
      user._id,
      { password: hashedPassword },
      { new: true } // Get the updated document
    );

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Unable to update password",
    });
  }
};
