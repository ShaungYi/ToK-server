
const allCreatedResources = {}
class Resource {

    bushId

    constructor(name, id, type, level, connections){
        this.name = name
        this.id = id
        this.type = type
        this.level = level
        this.connections = connections

        allCreatedResources[id] = this
    }

}

function getResourceIdsList(resourceList) {
    return resourceList.map((resource) => resource.id)
}

module.exports = {
    getResourceIdsList,
    allCreatedResources,
    Resource
}
