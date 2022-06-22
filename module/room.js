import { checkForOverwrite } from '/core/util.js'
import Commands from '/core/commands.js'

const Room = {

    init: function () {
        Commands.addCommand('look', /^(?:look)$/, function () {
            const player_loc = D.player.location
            return D[player_loc].descr
        })
    },


    add: function (p) {
        checkForOverwrite(p.id, 'room')
        D[p.id] = {
            type: 'room',
            name: p.name,
        }
    },


    addDescr: function (id, descr, descrDist) {
        D[id]['descr'] = descr
        D[id]['descrDist'] = descrDist
    },


    describe: function () {
        const player_loc = D.player.location
        const name = `Your location: ${D[player_loc].name}`
        const descr = `${D[player_loc].descr} `
        return [name, -7, descr, 1]
        // will 2 zurückgeben: name (ganz oben), descr (zweiter Slot)
        // array in array, optional?
        // Analyse auslagern in util, nicht in teaden.js:describe() ?
    },
}
export default Room