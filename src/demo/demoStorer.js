const { allCreatedResources } = require("./Resource");
const { treeData } = require("./treeData");
const { Bush } = require("../mongooseModels/BushModel");
const { BushPosition } = require("../mongooseModels/BushPositionModel");
const { Resource } = require("../mongooseModels/ResourceModel");
const { connectToDb } = require("../mongoose");


// connectToDb()

async function storeDemoTree() {
    await Bush.clearCollection()
        .then(msg => {
            console.log(msg)
            Bush.storeHierarchy(treeData.hierarchy)
        })

    await Resource.storeResources(allCreatedResources)

    await BushPosition.storeBushPositions(treeData.bushPositions)
}

// storeDemoTree()

module.exports = {
    storeDemoTree
}