const express = require("express");
const dotenv = require("dotenv");
 const db = require("./config/database");
const authRoute = require("./routes/authRoute")
const profileDetails = require("./routes/profileRoute")
const cookieParser= require("cookie-parser")
const cors = require("cors")
const billRoute = require("./routes/billRoute")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001
db.connect();
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
// app.use(
// 	cors({
// 		origin:"http://localhost:3000",
// 		credentials:true,
// 	})
// )
app.use(cors({
	origin: '*',
}));


app.use("/api/v1/auth",authRoute);
app.use("/api/v1/profile",profileDetails);
app.use("/api/v1/bills",billRoute);


app.listen(PORT, ()=>{
    console.log(`Server is Listening on ${PORT}`);
}) 

