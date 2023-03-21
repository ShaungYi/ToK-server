const express = require("express");
const functions = require("firebase-functions");
const cors = require("cors");
<<<<<<< HEAD
const {connectToDb} = require("./mongoose.js");
const {BushPosition} = require("./mongooseModels/BushPositionModel.js");
const bodyParser = require("body-parser");
const {Bush} = require("./mongooseModels/BushModel.js");
const {Resource} = require("./mongooseModels/ResourceModel.js");
const {standarDizeBushPositions} = require("./util/PositionLogic.js");
const {storeDemoTree} = require("./demo/demoStorer.js");
=======
const { connectToDb } = require("./mongoose.js");
const { BushPosition } = require("./mongooseModels/BushPositionModel.js");
const bodyParser = require("body-parser");
const { Bush } = require("./mongooseModels/BushModel.js");
const { Resource } = require("./mongooseModels/ResourceModel.js");
const { standarDizeBushPositions } = require("./util/PositionLogic.js");
const { storeDemoTree } = require("./demo/demoStorer.js");
// const { PORTNUM, ORIGIN } = require("./Constants.js");
>>>>>>> new-branch


require("dotenv").config();


const app = express();

const portNum = process.env.PORTNUM;
<<<<<<< HEAD
const ORIGIN = process.env.ORIGIN;
console.log("portNum: ", portNum);
=======
const ORIGIN = process.env.ORIGIN
const IS_LOCAL = process.env.IS_LOCAL === 'true' ? true : false

console.log('ORIGIN: ', ORIGIN)
console.log('IS_LOCAL: ', IS_LOCAL)
console.log("portNum (for local): ", portNum);
>>>>>>> new-branch

app.use(cors({
  origin: ORIGIN,
}));


connectToDb();
// storeDemoTree()
const jsonParser = bodyParser.json();


app.get("/", async (req, res) => {
  const treeData = {};

  treeData.hierarchy = await Bush.getHierarchy();
  treeData.bushPositions = await BushPosition.getBushPositions();
  const allResources = await Resource.getResources();


  const resData = {
    treeData,
    allResources,
  };

  res.send(JSON.stringify(resData));
});
<<<<<<< HEAD
=======


app.post("/bush-position/", jsonParser, async (req, res) => {
  let newBushPositions = req.body;
  newBushPositions = standarDizeBushPositions(newBushPositions);
  console.log(newBushPositions);
  console.log("post request");
  for (const key of Object.keys(newBushPositions)) {
    const bushPosition = newBushPositions[key];
    const updated = await BushPosition.updateOne({ id: key }, { x: bushPosition.x, y: bushPosition.y }, { new: true });
  }

  res.send("bush position updated");
});


app.get("/test", (req, res) => {
  res.send("success: deployed on firebase");
  console.log(res)
});
>>>>>>> new-branch


app.post("/bush-position/", jsonParser, async (req, res) => {
  let newBushPositions = req.body;
  newBushPositions = standarDizeBushPositions(newBushPositions);
  console.log(newBushPositions);
  console.log("post request");
  for (const key of Object.keys(newBushPositions)) {
    const bushPosition = newBushPositions[key];
    const updated = await BushPosition.updateOne({id: key}, {x: bushPosition.x, y: bushPosition.y}, {new: true});
  }

<<<<<<< HEAD
  res.send("bush position updated");
});


app.get("/test", (req, res) => {
  res.send("success: deployed on firebase");
});


app.listen(portNum,
=======
if (IS_LOCAL) {
  app.listen(portNum,
>>>>>>> new-branch
    () => console.log(`listening on port ${portNum}`)
  )
} else {
  exports.app = functions.https.onRequest(app);
}





// exports.app = functions.https.onRequest(app);

