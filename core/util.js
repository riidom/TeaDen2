
function include (file, defer = false) {
    const script = document.createElement('script')
    script.type = 'module'
    script.defer = defer
    script.src = file
    document.getElementsByTagName('body').item(0).appendChild(script)
    
}


function checkForOverwrite (id, newType) {
    if (D[id]) {
        console.warn(`ID overwritten! '${id}' from type \'${D[id].type}\' to type \'${newType}\'`)
    }
}


function sortText (main, part) {
    for (let i = 0; i < part.length; i = i + 2) {
        console.log(part[i], part[i + 1])
    }
}


export {
    include,
    checkForOverwrite,
    sortText
}