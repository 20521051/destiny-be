const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();// connect .env

mongoose.connect((process.env.MONGOOSE_CONNECTION_URL), ()=>{
    console.log("Connect database is success!!!");
})

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan("common"));// sent request => hien thi terminal

app.listen(8000, ()=>{
    console.log('Server is running...');
    
})