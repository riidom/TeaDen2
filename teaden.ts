import output from './core/output.js'
import Commands from './core/commands.js'
import { sortText } from './core/util.js'

import Room from './module/room.js'
import Connection from './module/connection.js'
import Person from './module/person.js'

declare var moduleNames

// set up event listener (setTimeout to prevent a bug), init some stuff
setTimeout(() => {
    const user_input = document.getElementById('user-input') as HTMLInputElement
    user_input.disabled = false
    user_input.placeholder = ' ...'
    user_input.focus()
    user_input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            processInput(user_input.value)
            user_input.value = ''
        }
    })

    output.addText("Welcome adventurer!", 'p', 'em')

    moduleNames.forEach(n => eval(`${n}.init()`))

    describe()
}, 1)


// process player input after submit, then give error or advance game
function processInput (input_raw) {
    const input_proc = input_raw.toLocaleLowerCase().trim()
    const result = Commands.eval(input_proc)

    if (result) {
        output.addText(result)
    } else {
        output.addText(`Don't understand '${input_proc}'.`)
    }

    describe()
}


function describe () {
    let text = ''
    let partsArray = []
    moduleNames.forEach(function (n) {
        const part = eval(`${n}.describe()`)
        part && sortText(partsArray, part)
    })
    output.addText(text)
}
