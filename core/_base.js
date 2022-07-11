class Base {

  // check for double id's; doesn't interrupt, but gives console warning
  static checkForOverwrite (id, newType) {
    if (D[id]) {
      console.warn(`ID overwritten! '${id}' from type \'${D[id].type}\' to type \'${newType}\'`)
    }
  }

}
export { Base }
