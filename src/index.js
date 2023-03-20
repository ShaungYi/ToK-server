const express = require('express')
const cors = require('cors')
const {connectToDb } = require('./mongoose.js')
const { BushPosition } = require('./mongooseModels/BushPositionModel.js')
const bodyParser = require('body-parser');
const { Bush } = require('./mongooseModels/BushModel.js');
const { Resource } = require('./mongooseModels/ResourceModel.js');
const { standarDizeBushPositions } = require('./util/PositionLogic.js');
const { storeDemoTree } = require('./demo/demoStorer.js');
require('dotenv').config()


const app = express()

const portNum = process.env.PORT
const ORIGIN = process.env.ORIGIN
console.log('portNum: ', portNum)

app.use(cors({
    origin: ORIGIN
}))


connectToDb()
// storeDemoTree()
const jsonParser = bodyParser.json()


app.get('/', async (req, res) => {

    const treeData = {}

    treeData.hierarchy = await Bush.getHierarchy()
    treeData.bushPositions = await BushPosition.getBushPositions()
    const allResources = await Resource.getResources()


    const resData = {
        treeData,
        allResources
    }

    res.send(JSON.stringify(resData))
})



app.post('/bush-position/', jsonParser, async (req, res) => {
    let newBushPositions = req.body
    newBushPositions = standarDizeBushPositions(newBushPositions)
    console.log(newBushPositions)
    console.log('post request')
    for (let key of Object.keys(newBushPositions)){
        const bushPosition = newBushPositions[key]
        const updated = await BushPosition.updateOne({id: key}, {x: bushPosition.x, y: bushPosition.y}, {new: true})
    }    

    res.send('bush position updated')
})




app.listen(portNum,
    () => console.log(`listening on port ${portNum}`)
)

