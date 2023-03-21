const mongoose = require("mongoose");
// const { DB_URL } = require("./Constants");
const { Bush } = require("./mongooseModels/BushModel");
const { BushPosition } = require("./mongooseModels/BushPositionModel");
const { Resource } = require("./mongooseModels/ResourceModel");
require('dotenv').config()


const DB_URL = process.env.DB_URL
console.log('DB_URL', DB_URL)

async function connectToDb() {
    console.log('DB_URL', DB_URL)
    try {
        await mongoose.connect(DB_URL); 
        console.log('connected to database')
    } catch (err){
        console.log(err)
    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}






module.exports = {
    connectToDb
}