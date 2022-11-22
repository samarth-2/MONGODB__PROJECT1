const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const mysql=require("mysql2");
const cors = require("cors");

// const fileUpload = require('express-fileupload');
// const expressLayouts = require('express-ejs-layouts');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"st1_bee"
})