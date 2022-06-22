import output from './core/output.js'
import Commands from './core/commands.js'
import { collectText } from './core/util.js'

import Room from './module/room.js'
import Connection from './module/connection.js'
import Person from './module/person.js'


// set up event listener (setTimeout to prevent a bug), init some stuff
setTimeout(() => {
  const user_input = document.getElementById('user-input')
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
  const result = Commands.evaluate(input_proc)

  if (result) {
    if (F.clearScreen) {
      output.clearText()
      F.clearScreen = false
      // description from last turn in italics on top
      output.addText(result, 'p', 'em')
      describe()
    } else {
      output.addText(result)
    }

  } else {
    output.addText(`Don't understand '${input_proc}'.`)
  }
}


function describe () {
  // divider ("-" is placeholder for <hr>) sits at priority 0
  let partsArray = [["-", 0]]

  // get current descriptions '.describe()' from all modules
  moduleNames.forEach(function (n) {
    const part = eval(`${n}.describe()`)
    part && (partsArray = collectText(partsArray, part))
  })

  // sort the returned text snippets by priority
  partsArray.sort((a, b) => a[1] - b[1])

  // 'span' is just a misused 'p' with no margin-bottom
  partsArray.forEach(text => {
    if (text[1] > 0) {
      output.addText(text[0])
    } else if (text[1] < 0) {
      output.addText(text[0], 'span')
    } else {
      output.addHtml('<hr>')
    }
  })
}
