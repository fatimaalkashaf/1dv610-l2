/**
 * The entry point for the module.
 *
 * @file index.js
 * @author Fatima Alkashaf <fa223ns@student.lnu.se>
 * @version 1.0.0
 */

const { Note } = require('./note.js')
const { Notebook } = require('./notebook.js')

module.exports = {
  Note,
  Notebook
}
