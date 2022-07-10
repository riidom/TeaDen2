import { checkForOverwrite } from '/core/util.js'

class Person {


  static init () { }
  
  
  static add(p) {
    checkForOverwrite(p.id, 'person')
    D[p.id] = {
      type: 'person',
      name: p.name,
      location: p.location,
      visitedPlaces: new Set(),
      lastVisitedPlace: undefined,
    }
    D[p.id].visitedPlaces.add(p.location)
  }


  static move (to_loc) {
    D[p.id].lastVisitedPlace = D[p.id].location
    D[p.id].location = to_loc
    D[p.id].visitedPlaces.add(to_loc)
  }


  static hasVisited (loc) {
    return D[p.id].visitedPlaces.has(loc)
  }

  static describe () { }
}
export default Person
