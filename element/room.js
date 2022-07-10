import { checkForOverwrite } from '/core/util.js'
import Commands from '/core/commands.js'

class Room {

  static init() {
    Commands.addCommand('look', /^(?:look)$/, function () {
      const player_loc = D.player.location
      return D[player_loc].descr
    })
  }


  static add(p) {
    checkForOverwrite(p.id, 'room')
    D[p.id] = {
      type: 'room',
      name: p.name,
    }
  }


  static addDescr(id, descr, descrDist) {
    D[id]['descr'] = descr
    D[id]['descrDist'] = descrDist
  }


  static describe() {
    const player_loc = D.player.location
    const name = `Your location: ${D[player_loc].name}`
    const descr = `${D[player_loc].descr} `
    return [name, -7, descr, 1]
  }
}
export default Room