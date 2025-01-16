const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    bills:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Bills"
      }
    ],
    profileDetails: {
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref: "Profile"
    },
    token:{
      type:String
    }
  },
  { timestamps: true }
);

// const User = mongoose.model("User", UserSchema);

// exports.modules = User;

module.exports = mongoose.model("user", userSchema);
