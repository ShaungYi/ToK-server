const { allCreatedResources } = require("./demo/Resource");
const { treeData } = require("./demo/treeData");
const { Bush } = require("./mongooseModels/BushModel");
const { BushPosition } = require("./mongooseModels/BushPositionModel");
const { Resource } = require("./mongooseModels/ResourceModel");


async function storeDemoTree() {
    await Bush.clearCollection()
        .then(msg => {
            console.log(msg)
            Bush.storeHierarchy(treeData.hierarchy)
        })

    await Resource.storeResources(allCreatedResources)

    await BushPosition.storeBushPositions(treeData.bushPositions)
}

storeDemoTree()