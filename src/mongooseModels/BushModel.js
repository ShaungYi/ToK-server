const mongoose = require("mongoose");
const { Resource } = require("./ResourceModel");


const bushSchema = new mongoose.Schema({
    name: String,
    id: String,
    resourceIds: {
        type: [String],
        default: []
    },
    childrenIds: {
        type: [String],
        default: []
    }
})


bushSchema.statics.storeHierarchy = function (subHierarchy) {

    const bush = new Bush({
        name: subHierarchy.name,
        id: subHierarchy.id,
        resourceIds: subHierarchy.resources.map(resource => resource.id)
    })




    if (subHierarchy.children) {

        bush.childrenIds = subHierarchy.children.map(child => child.id)

        for (node of subHierarchy.children) {
            this.storeHierarchy(node)
        }
    }

    console.log(bush)
    bush.save()

}



bushSchema.statics.getHierarchy = async function () {

    async function recursiveBushLoader(daId){
        const bush = await Bush.findOne({id: daId})

        const subHierarchy = {}

        subHierarchy.name = bush.name
        subHierarchy.id = bush.id
        subHierarchy.resources = await Promise.all(
            bush.resourceIds.map(async (resourceId) => {
                const resource = await Resource.findOne({id: resourceId})
                return resource
            })
        ) 
        subHierarchy.children = await Promise.all(
            bush.childrenIds.map(async (childId) => {
                const childBush = await recursiveBushLoader(childId)
                return childBush
            })
        ) 

        return subHierarchy

    }

    const res = await recursiveBushLoader('daIdOfRoot')

    // setTimeout()
    return res
}



bushSchema.statics.clearCollection = function () {
    return this.deleteMany({})
}


const Bush = mongoose.model('Bush', bushSchema);


module.exports = {
    Bush
}