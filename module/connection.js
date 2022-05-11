import Commands from '/core/commands.js'
import { checkForOverwrite } from '/core/util.js'
const Connection = {

    dir: {
        'n': { opp: 's', name: 'north' },
        'e': { opp: 'w', name: 'east' },
        's': { opp: 'n', name: 'south' },
        'w': { opp: 'e', name: 'west' },
        'u': { opp: 'd', name: 'up' },
        'd': { opp: 'u', name: 'down' },
        'i': { opp: 'o', name: 'in' },
        'o': { opp: 'i', name: 'out' },
    },


    init: function () {
        Commands.add(
            'go',
            /^([neswudio])$/,
            function (input) {
                return input[1]
            }
        )
        Commands.addAlias(
            'go_verbose',
            /^(?:go) ([neswudio])$/,
            'go'
        )
    },


    getOpp: function (d) {
        return this.dir[d].opp
    },


    add: function (newWay, twoWay = true) {
        const [r1, d, r2] = newWay.split(' ')
        this.addLiteral(r1, d, r2)
        if (twoWay) {
            this.addLiteral(r2, this.getOpp(d), r1)
        }
    },


    addLiteral: function (r1, d, r2) {
        const id = `${r1} ${d} ${r2}`
        checkForOverwrite(id, 'connection')
        D[id] = {
            type: 'connection',
            r1, d, r2
        }

        if (!D[r1].exitTo) { D[r1].exitTo = {} }
        if (!D[r2].entryFrom) { D[r2].entryFrom = {} }
        
        D[r1].exitTo[r2] = d
        D[r2].entryFrom[r1] = this.getOpp(d)
    },

    describe: function () {
        return ["Exits...", 0]
    }
}
export default Connection
