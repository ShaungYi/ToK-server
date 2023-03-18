const mongoose = require("mongoose");



const resourceSchema = new mongoose.Schema({
    name: String,
    id: String,
    bushId: {
        type: String,
        default: ''
    },
    type: String,
    level: {
        type: Number,
        default: 1
    },
    connections: {
        type: [String],
        default: []
    }
})


resourceSchema.statics.storeResources = function (resources) {

    this.deleteMany({})
        .then(() => {
            for (let key of Object.keys(resources)) {

                const rsrc = resources[key]

                const resource = new Resource({
                    name: rsrc.name,
                    id: rsrc.id,
                    bushId: rsrc.bushId,
                    type: rsrc.type,
                    level: rsrc.level,
                    connections: rsrc.connections
                })


                resource.save()
            }
        })
}


resourceSchema.statics.getResources = async function () {
    const resourceList = await Resource.find()
    const resources = {}
    resourceList.forEach(resource => {
        resources[resource.id] = resource
    })

    return resources
}


const Resource = mongoose.model('Resource', resourceSchema)


module.exports = {
    Resource
}