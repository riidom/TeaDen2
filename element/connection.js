import Commands from '/core/commands.js'
import { Base } from '/core/_base.js'

class Connection extends Base {

  static dir = {
    'n': { opp: 's', name: 'north' },
    'e': { opp: 'w', name: 'east' },
    's': { opp: 'n', name: 'south' },
    'w': { opp: 'e', name: 'west' },
    'u': { opp: 'd', name: 'up' },
    'd': { opp: 'u', name: 'down' },
    'i': { opp: 'o', name: 'in' },
    'o': { opp: 'i', name: 'out' },
  }


  static init() {
    Commands.addCommand(
      'go',
      /^(n|e|s|w|u|d|i|o|north|east|south|west|up|down|in|out)$/,
      (input) => {
        const loc = D.player.location
        let inp = input[1]
        // transform e.g. "north" to "n"
        if (inp.length > 1) {
          inp = inp.slice(0, 1)
        }
        if (D[loc].exitTo[inp]) {
          D.player.location = D[loc].exitTo[inp]
          F.clearScreen = true
          return "You went " + this.dir[inp].name + "."
        } else {
          return "You can't go " + this.dir[inp].name + "."
        }
      }
    )
    Commands.addAlias(
      'go_verbose',
      /^(?:go) (n|e|s|w|u|d|i|o|north|east|south|west|up|down|in|out)$/,
      'go'
    )
  }


  static getOpp(d) {
    return this.dir[d].opp
  }


  static add(newWay, twoWay = true) {
    const [r1, d, r2] = newWay.split(' ')
    this.addLiteral(r1, d, r2)
    if (twoWay) {
      this.addLiteral(r2, this.getOpp(d), r1)
    }
  }


  static addLiteral(r1, d, r2) {
    const id = `${r1} ${d} ${r2}`
    super.checkForOverwrite(id, 'connection')
    D[id] = {
      type: 'connection',
      r1, d, r2
    }

    if (!D[r1].exitTo) { D[r1].exitTo = {} }
    if (!D[r2].entryFrom) { D[r2].entryFrom = {} }

    D[r1].exitTo[d] = r2
    D[r2].entryFrom[this.getOpp(d)] = r1
  }
  

  static describe() {
    const loc = D.player.location
    if (!D[loc].exitTo) {
      return ["There are no exits here.", 1]
    } else {
      let exits = ""
      const dirs = Object.keys(D[loc].exitTo)
      dirs.forEach(exit => {
        exits = this.dir[exit].name + ', ' + exits
      })
      exits = exits.slice(0, -2)
      exits = exits.replace(/, ([^,]+)$/, ' and $1')
      return ["Exits: " + exits, -5]
    }
  }
}
export default Connection
