const express = require("express");
const {signup, login, updatePassword} = require("../controllers/auth");

const router = express.Router();


router.post("/signup",signup);
router.post("/login",login);
router.post("/update-password",updatePassword);

module.exports = router