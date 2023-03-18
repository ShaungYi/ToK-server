const mongoose = require("mongoose");
const { Bush } = require("./mongooseModels/BushModel");
const { BushPosition } = require("./mongooseModels/BushPositionModel");
const { Resource } = require("./mongooseModels/ResourceModel");


async function connectToDb() {
    await mongoose.connect('mongodb://127.0.0.1:27017/tree');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

connectToDb()
    .then(() => console.log('connected to database'))
    .catch(err => console.log(err));



const hierarchy = Bush.getHierarchy()
const bushPositions = BushPosition.getBushPositions()
const resources = Resource.getResources()


module.exports = {
    hierarchy,
    bushPositions,
    resources
}