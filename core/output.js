class Output {
  
  static target = document.getElementById('win')


  static addText(text, tag = 'p', inner_tag) {
    if (inner_tag) {
      this.target.innerHTML += `<${tag}><${inner_tag}>${text}</${inner_tag}></${tag}>`
    } else {
      this.target.innerHTML += `<${tag}>${text}</${tag}>`
    }
  }


  static addHtml(html) {
    this.target.innerHTML += html
  }


  static clearText() {
    this.target.innerHTML = ''
  }
}

export default Output
