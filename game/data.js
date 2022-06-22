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


Connection.add('path w bench')
Connection.add('path e farm')
Connection.add('path n forest_1')
Connection.add('forest_1 n forest_2')

Block.add('path', 'n',
    () => {
        Person.hasVisited('farm')
    },
    "Without any idea it seems to be too dangerous to enter that forest.",
    "Remembering most of the map drawn on the wall of the farm building, you feel confident to enter the forest."
)



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

Room.addDescr('farm',
    "A farm from someone who used to live here. There is a map drawn on the outer wall of the main building; seemingly, the local area and especially the forest.",
    "To the $, there are some farm buildings, though it is very quiet there."
)

