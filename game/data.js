import Connection from '/module/connection.js'
import Person from '/module/person.js'
import Room from '/module/room.js'



// Persons


Person.add({
    id: 'player',
    name: "Player",
    location: 'bench',
})



// Rooms


Room.add({
    id: 'path',
    name: "lonely path",
})

Room.add({
    id: 'bench',
    name: "small bench",
})

Room.add({
    id: 'farm',
    name: "your farm",
})

Room.add({
    id: 'backyard',
    name: "backyard",
})

Room.add({
    id: 'forest_1',
    name: "edge of forest",

})

Room.add({
    id: 'forest_2',
    name: "deep inside the forest",

})



// Connections


Connection.add('path n bench')
Connection.add('bench n forest_1')



// Descriptions


Room.addDescr('path',
    "A small unlit path leading from the farm to the forest.",
    "To the $, there seems to be a path."
)

Room.addDescr('bench',
    "A small bench aside the path.",
    "In the $ is a bit of free space between the trees."
)

Room.addDescr('forest_1',
    "A bit of light enters the forest here close at its border.",
    "Towards $, the forest is dense."
)

Room.addDescr('forest_2',
    "Deep inside the forest, it is dark.",
    "Further $, the forest is very dark."
)

