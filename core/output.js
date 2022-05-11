const output = {
    target: document.getElementById('win'),


    // starts describing "from scratch" e.g. after moving
    // 'msg' is from last round (avoids "press key to continue")
    redraw: function (msg) {
        this.clearText()
        this.addHtml('<hr>')
        if (msg) { this.addText(msg, 'p', 'em') }
    },


    addText: function (text, tag = 'p', inner_tag) {
        if (inner_tag) {
            this.target.innerHTML += `<${tag}><${inner_tag}>${text}</${inner_tag}></${tag}>`
        } else {
            this.target.innerHTML += `<${tag}>${text}</${tag}>`
        }
    },


    addHtml: function (html) {
        this.target.innerHTML += html   
    },


    clearText: function () {
        this.target.innerHTML = ''
    }
}
export default output
