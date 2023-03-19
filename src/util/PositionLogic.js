

function standarDizeBushPositions(bushPositions) {
    let minX = 99999999
    let minY = 99999999

    for (let key of Object.keys(bushPositions)) {
        const bushPosition = bushPositions[key]
        
        if (bushPosition.x < minX) {
            minX = bushPosition.x
        }

        if (bushPosition.y < minY) {
            minY = bushPosition.y
        }
    }


    const standarDized = {}


    for (let key of Object.keys(bushPositions)) {

        const bushPosition = bushPositions[key]

        standarDized[key] = {
            x: bushPosition.x - minX,
            y: bushPosition.y - minY
        }
    }

    return standarDized


}


module.exports = {
    standarDizeBushPositions
}