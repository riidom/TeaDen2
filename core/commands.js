import { checkForOverwrite } from '/core/util.js'
const Commands = {

    add: function (name, regex, func) {
        checkForOverwrite(name, 'command')
        C[name] = {
            regex,
            func,
            alias: false,
        }
    },


    addAlias: function (name, regex, origin) {
        checkForOverwrite(name, 'command-alias')
        C[name] = {
            regex,
            alias: origin,
        }
    },

    
    evaluate: function (input) {
        for (let name in C) {
            const command = C[name]
            const result = command.regex.exec(input)
            
            if (result) {
                if (command.func) {
                    return command.func(result)

                } else if (command.alias) {
                    return C[command.alias].func(result)

                } else {
                    console.log('Smth weird with Commands.eval()')
                    return false
                }
            }
        }
    },
}
export default Commands
