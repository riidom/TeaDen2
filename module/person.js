import { checkForOverwrite } from '/core/util.js'
const Person = {

  init: function () { },


  add: function (p) {
    checkForOverwrite(p.id, 'person')
    D[p.id] = {
      type: 'person',
      name: p.name,
      location: p.location,
      visitedPlaces: new Set(),
      lastVisitedPlace: undefined,
    }
    D[p.id].visitedPlaces.add(p.location)
  },


  move: function (to_loc) {
    D[p.id].lastVisitedPlace = D[p.id].location
    D[p.id].location = to_loc
    D[p.id].visitedPlaces.add(to_loc)
  },


  hasVisited: function (loc) {
    return D[p.id].visitedPlaces.has(loc)
  },

  describe: function () { }
}
export default Person
