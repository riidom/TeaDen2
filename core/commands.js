import Base from '/core/_base.js'
class Commands extends Base {

  static addCommand(name, regex, func) {
    super.checkForOverwrite(name, 'command')
    // in module, func must be arrow function (bc. context of this)
    C[name] = {
      regex,
      func,
      alias: false,
    }
  }


  static addAlias(name, regex, origin) {
    super.checkForOverwrite(name, 'command-alias')
    C[name] = {
      regex,
      func: false,
      alias: origin,
    }
  }


  static addFilter(filterName, cmdName) {
    if (!CF[cmdName]) {
      CF[cmdName] = []
    }
    CF[cmdName].push(filterName)
  }


  static evaluate(input) {
    for (let name in C) {
      const command = C[name]
      const result = command.regex.exec(input)

      if (result) {
        // either func() or alias() have to exist

        if (command.func) {
          return command.func(result)

        } else if (command.alias) {
          return C[command.alias].func(result)

        } else {
          console.log(`Check command '${name}', func() or alias() missing.`)
          return false
        }
      }
    }
  }
  
}
export default Commands
