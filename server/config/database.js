const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const URL = process.env.DBURL;

exports.connect = () => {
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err);
    });
};
