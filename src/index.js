const express = require('express')
const cors = require('cors')
const { hierarchy, resources, bushPositions } = require('./mongoose.js')

const app = express()

const portNum = 3001

app.use(cors({
    origin: `http://localhost:3000`
}))

// console.log(JSON.stringify(treeData))





app.get('/', async (req, res) => {

    const treeData = {}

    treeData.hierarchy = await hierarchy
    treeData.bushPositions = await bushPositions
    const allResources = await resources


    const resData = {
        treeData,
        allResources
    }

    res.send(JSON.stringify(resData))
})






app.listen(portNum,
    () => console.log(`listening on port ${portNum}`)
)

