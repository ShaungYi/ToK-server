const mongoose = require("mongoose");
const { Bush } = require("./BushModel");


const bushPositionSchema = new mongoose.Schema({
    id: String,
    x: Number,
    y: Number
})

bushPositionSchema.statics.storeBushPositions = async function(positions){
    await this.deleteMany({})
    for (let bushName of Object.keys(positions)) {
        const position = positions[bushName]
        const bush = await Bush.findOne({name: bushName})

        const bushPosition = new BushPosition({
            id: bush.id,
            x: position.x,
            y: position.y
        })

        console.log(bushPosition)

        bushPosition.save()
    }
 
}

bushPositionSchema.statics.getBushPositions = async function(){
    const bushPositionList = await BushPosition.find()
    const bushPositions = {}

    bushPositionList.forEach(bushPosition => {
        bushPositions[bushPosition.id] = bushPosition

    })

    return bushPositions
}

const BushPosition = mongoose.model('BushPosition', bushPositionSchema)


module.exports = {
    BushPosition
}