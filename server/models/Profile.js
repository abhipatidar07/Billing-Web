const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    organizationName:{
        type:String,
        required:false
    },
    addressLine1:{
        type:String,
        required:false
    },
    addressLine2:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    logo:{
        type:String,
        required:false
    },
    shopGSTIN:{
        type:String,
        required:false,
    },
    about:{
        type:String,
        required:false
    },
},
{ timestamps: true });

module.exports = mongoose.model("Profile",profileSchema);