const express = require("express");
const { updateProfile } = require("../controllers/profile");
// const userProfileDetails = require("../controllers/profile");

const router = express.Router();
router.post("/updateProfile",updateProfile);

module.exports = router;