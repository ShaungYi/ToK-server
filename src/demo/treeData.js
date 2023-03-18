const { v4: uuid } = require('uuid')
const { allCreatedResources, Resource } = require('./Resource.js')


const hierarchy =
{
  "name": "Root",
  "id": `daIdOfRoot`,
  resources: [],
  "children": [
    {
      "name": "Origin",
      "id": `Bush${uuid().replace(/-/g, '')}`,
      resources: [],
      "children": [
        {
          "name": "Science",
          "id": `Bush${uuid().replace(/-/g, '')}`,
          "resources": [
            new Resource('book sci', `Resource${uuid().replace(/-/g, '')}`, 'book', 1, []),
            new Resource('video sci', `Resource${uuid().replace(/-/g, '')}`, 'video', 2, []),
            new Resource('course sci', `Resource${uuid().replace(/-/g, '')}`, 'course', 3, [])],
          "children": [
            {
              "name": "Physics",
              "id": `Bush${uuid().replace(/-/g, '')}`,
              "resources": [
                new Resource('book phy', `Resource${uuid().replace(/-/g, '')}`, 'book', 1, []),
                new Resource('video phy', `Resource${uuid().replace(/-/g, '')}`, 'video', 2, []),
                new Resource('course phy', `Resource${uuid().replace(/-/g, '')}`, 'course', 3, [])]
            },
            {
              "name": "Chemistry",
              "id": `Bush${uuid().replace(/-/g, '')}`,
              "resources": [
                new Resource('book chem', 'dachem', 'book', 1, []),
                new Resource('video chem', `Resource${uuid().replace(/-/g, '')}`, 'video', 2, []),
                new Resource('course chem', `Resource${uuid().replace(/-/g, '')}`, 'course', 3, [])],
              "children": [
                {
                  "name": "Biology",
                  "id": `Bush${uuid().replace(/-/g, '')}`,
                  "resources": [
                    new Resource('book bio', `Resource${uuid().replace(/-/g, '')}`, 'book', 3, []),
                    new Resource('video bio', `Resource${uuid().replace(/-/g, '')}`, 'video', 2, []),
                    new Resource('course bio', `Resource${uuid().replace(/-/g, '')}`, 'course', 1, [])]
                },
                {
                  "name": "Geology",
                  "id": `Bush${uuid().replace(/-/g, '')}`,
                  "resources": [
                    new Resource('book geo', `Resource${uuid().replace(/-/g, '')}`, 'book', 1, []),
                    new Resource('video geo', `Resource${uuid().replace(/-/g, '')}`, 'video', 2, []),
                    new Resource('course geo', `Resource${uuid().replace(/-/g, '')}`, 'course', 3, [])]
                }
              ]
            },
          ]
        },
        {
          "name": "Humanities",
          "id": `Bush${uuid().replace(/-/g, '')}`,
          "resources": [
            new Resource('book hum', `Resource${uuid().replace(/-/g, '')}`, 'book', 1, []),
            new Resource('video hum', `Resource${uuid().replace(/-/g, '')}`, 'video', 2, []),
            new Resource('course hum', `Resource${uuid().replace(/-/g, '')}`, 'course', 3, [])],
          "children": [
            {
              "name": "Literature",
              "id": `Bush${uuid().replace(/-/g, '')}`,
              "resources": [
                new Resource('book lit', `Resource${uuid().replace(/-/g, '')}`, 'book', 1, []),
                new Resource('video lit', `Resource${uuid().replace(/-/g, '')}`, 'video', 2, []),
                new Resource('course lit', `Resource${uuid().replace(/-/g, '')}`, 'course', 3, [])]
            },
            {
              "name": "Philosophy",
              "id": `Bush${uuid().replace(/-/g, '')}`,
              "resources": [
                new Resource('book phil', `Resource${uuid().replace(/-/g, '')}`, 'book', 3, []),
                new Resource('video phil', `Resource${uuid().replace(/-/g, '')}`, 'video', 3, []),
                new Resource('course phil', `Resource${uuid().replace(/-/g, '')}`, 'course', 2, [])]
            },
            {
              "name": "History",
              "id": `Bush${uuid().replace(/-/g, '')}`,
              "resources": [
                new Resource('book hist', `Resource${uuid().replace(/-/g, '')}`, 'book', 1, []),
                new Resource('video hist', `Resource${uuid().replace(/-/g, '')}`, 'video', 1, []),
                new Resource('course hist', `Resource${uuid().replace(/-/g, '')}`, 'course', 3, [])]
            }
          ]
        },
        {
          "name": "Math",
          "id": `Bush${uuid().replace(/-/g, '')}`,
          "resources": [
            new Resource('book math', `Resource${uuid().replace(/-/g, '')}`, 'book', 2, []),
            new Resource('video math', `Resource${uuid().replace(/-/g, '')}`, 'video', 3, []),
            new Resource('course math', `Resource${uuid().replace(/-/g, '')}`, 'course', 3, [])],
          "children": [
            {
              "name": "Math 1",
              "id": `Bush${uuid().replace(/-/g, '')}`,
              "resources": [
                new Resource('book math1', `Resource${uuid().replace(/-/g, '')}`, 'book', 3, []),
                new Resource('video math1', `Resource${uuid().replace(/-/g, '')}`, 'video', 3, []),
                new Resource('course math1', `Resource${uuid().replace(/-/g, '')}`, 'course', 3, [])]
            },
            {
              "name": "Geometry",
              "id": `Bush${uuid().replace(/-/g, '')}`,
              "resources": [
                new Resource('book geom', `Resource${uuid().replace(/-/g, '')}`, 'book', 3, []),
                new Resource('video geom', `Resource${uuid().replace(/-/g, '')}`, 'video', 2, []),
                new Resource('course geom', `Resource${uuid().replace(/-/g, '')}`, 'course', 3, [])]
            }
          ]
        }
      ]
    }
  ]
}


const bushPositions =
{
  "Root": {
    "x": 650,
    "y": 770
  },
  "Origin": {
    "x": 650,
    "y": 577.5
  },
  "Science": {
    "x": 185.71428571428572,
    "y": 385
  },
  "Humanities": {
    "x": 650,
    "y": 385
  },
  "Math": {
    "x": 1114.2857142857142,
    "y": 385
  },
  "Physics": {
    "x": 92.85714285714286,
    "y": 192.5
  },
  "Chemistry": {
    "x": 278.57142857142856,
    "y": 192.5
  },
  "Literature": {
    "x": 464.28571428571433,
    "y": 192.5
  },
  "Philosophy": {
    "x": 650,
    "y": 192.5
  },
  "History": {
    "x": 835.7142857142858,
    "y": 192.5
  },
  "Math 1": {
    "x": 1021.4285714285714,
    "y": 192.5
  },
  "Geometry": {
    "x": 1207.142857142857,
    "y": 192.5
  },
  "Biology": {
    "x": 185.71428571428572,
    "y": 0
  },
  "Geology": {
    "x": 371.42857142857144,
    "y": 0
  }
}


const treeData =
{
  hierarchy,
  bushPositions,
}


function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0), i = arr.length, temp, index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}

const allResourceIds = Object.keys(allCreatedResources)
for (let resourceId of allResourceIds) {
  allCreatedResources[resourceId].connections = getRandomSubarray(allResourceIds, Math.floor(Math.random() * 10))
}

function storeParentBushIds(data) {

  for (let rsrc of data.resources) {
    rsrc.bushId = data.id
  }

  const children = data.children ? data.children : []
  for (let child of children) {
    storeParentBushIds(child)
  }
}

storeParentBushIds(treeData.hierarchy)










module.exports = {
  treeData
}



