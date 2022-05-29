const output = {
    target: document.getElementById('win'),

    
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
