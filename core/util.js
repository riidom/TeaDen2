
function include (file, defer = false) {
    const script = document.createElement('script')
    script.type = 'module'
    script.defer = defer
    script.src = file
    document.getElementsByTagName('body').item(0).appendChild(script)
    
}


// check for double id's; doesn't interrupt, but gives console warning
function checkForOverwrite (id, newType) {
    if (D[id]) {
        console.warn(`ID overwritten! '${id}' from type \'${D[id].type}\' to type \'${newType}\'`)
    }
}


// texts are an array of 0: actual text, and 1: queue pos (or priority)
function collectText (main, part) {
    for (let i = 0; i < part.length; i = i + 2) {
        main.push([part[i], part[i + 1]])
    }
    return main
}


export {
    include,
    checkForOverwrite,
    collectText,
}