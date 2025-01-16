// // const User = require("../models/user");
// const Profile = require("../models/Profile");
// const dotenv = require("dotenv");
// const user = require("../models/user");

// dotenv.config();

// exports.userProfileDetails = async (req, res) => {
//   try {
//     //get details from req ki body
//   const {
//     organizationName,
//     addressLine1,
//     addressLine2,
//     email,
//     logo,
//     shopGSTIN,
//     about,
//   } = req.body;

//   //apply validation
//   if(!organizationName || !addressLine1 || !addressLine2 || !email || !logo || !shopGSTIN || !about){
//     return res.status(400).json({
//         success:false,
//         message:"All fields are mendetory"
//     })
//   }
//   // Find user by email
//   const User = await user.findOne({ email });
//   if (!User) {
//     return res.status(404).json({
//       success: false,
//       message: "User not found. Please provide a valid email.",
//     });
//   }else{
//     console.log("user available")
//   }

//   // Extract user ID
//   const userid = User._id;
//   //create entry in DB
//   const profileDetail = await Profile.create({
//       organizationName,
//       addressLine1,
//       addressLine2,
//       email,
//       logo,
//       shopGSTIN,
//       about,
//   })

//   // Add the new course to the User Schema of the Instructor
//   await user.findByIdAndUpdate(
//     {email},
//     {
//       $push: {
//         profileDetails: Profile._id,
//       },
//     },
//     { new: true }
//   );
//   if(!profileDetail){
//     return res.status(401).json({
//         success:false,
//         message:"error while DB entry"
//     })
//   }
//   console.log("profile details" , profileDetail);
//    return res.status(200).json({
//     success:true,
//     data:profileDetail,
//     message:"Profile Details stored in Db successfully"
//   })
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "Unable to store userDetails in DB",
//     });
//   }
// };


// const Profile = require("../models/Profile");
// const dotenv = require("dotenv");
// const user = require("../models/user");

// dotenv.config();

// exports.userProfileDetails = async (req, res) => {
//   try {
//     // Get details from request body
//     const {
//       organizationName,
//       addressLine1,
//       addressLine2,
//       email,
//       logo,
//       shopGSTIN,
//       about,
//     } = req.body;

//     // Validation
//     if (
//       !organizationName ||
//       !addressLine1 ||
//       !addressLine2 ||
//       !email ||
//       !logo ||
//       !shopGSTIN ||
//       !about
//     ) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are mandatory",
//       });
//     }

//     // Find user by email
//     const User = await user.findOne({ email });
//     if (!User) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found. Please provide a valid email.",
//       });
//     } else {
//       console.log("User available");
//     }

//     // Create entry in DB
//     const profileDetail = await Profile.create({
//       organizationName,
//       addressLine1,
//       addressLine2,
//       email,
//       logo,
//       shopGSTIN,
//       about,
//     });

//     // Update User schema to add profile reference
//     await user.findOneAndUpdate(
//       { email }, // Match by email
//       {
//         $push: {
//           profileDetails: profileDetail, // Reference to profile ID
//         },
//       },
//       { new: true }
//     );

//     if (!profileDetail) {
//       return res.status(401).json({
//         success: false,
//         message: "Error while creating a profile in the database",
//       });
//     }

//     console.log("Profile details", profileDetail);
//     return res.status(200).json({
//       success: true,
//       data: profileDetail,
//       message: "Profile details stored in the database successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "Unable to store user details in the database",
//     });
//   }
// };

const Profile = require("../models/Profile");
const user = require("../models/user");


exports.updateProfile = async (req, res) => {
  try {
    // Get details from request body
    const {
      organizationName,
      addressLine1,
      addressLine2,
      email,
      logo,
      shopGSTIN,
      about,
    } = req.body;

    // const id = req.user.id;

    // Validation
    if (
      !organizationName ||
      !addressLine1 ||
      !addressLine2 ||
      !email ||
      !logo ||
      !shopGSTIN ||
      !about
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    // Find profile by id
    const userDetails = await user.findOne({email});
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if the user has a profile
    if (!userDetails.profileDetails) {
      return res.status(404).json({
        success: false,
        message: "Profile not associated with the user",
      });
    }


    const profile = await Profile.findById(userDetails.profileDetails);
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    profile.organizationName = organizationName;
    profile.addressLine1 = addressLine1;
    profile.addressLine2 = addressLine2;
    profile.email = email;
    profile.shopGSTIN = shopGSTIN;
    profile.logo = logo;
    profile.about = about;
    
    //save the updated profile
    await profile.save();
    return res.json({
			success: true,
			message: "Profile updated successfully",
			profile,
		});
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
