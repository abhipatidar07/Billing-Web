const express = require("express");
const {billDetails, getAllBills} = require("../controllers/bills");

const router = express.Router();


router.post("/billDetail",billDetails);
router.post("/getAllBills",getAllBills);


module.exports = router