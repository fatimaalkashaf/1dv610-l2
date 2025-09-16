/**
 * This class represents a Note object.
 * Stores the text with optional colors and tags.
 * Makes sure that the note has a number id and a non-empty text.
 *
 * @file note.js
 * @author Fatima Alkashaf <fa223ns@student.lnu.se>
 * @version 1.0.0
 */

const { removeDuplicateTags } = require('./helpers.js')

/**
 * The note class that represents a single note.
 */
class Note {
  /**
   * Creates a new Note instance.
   *
   * @param {number} id - The unique id for the note that must be a number.
   * @param {string} text - The text content of the note that cannot be a empty string.
   * @param {string} [color='white'] - The color of the note.
   * @param {string[]} [tags=[]] - The list of tags for the note.
   * @throws {Error} - If id is not a number or if text is empty.
   */
  constructor (id, text, color = 'white', tags = []) {
    // Validates that the id is a number.
    if (typeof id !== 'number') {
      throw new Error('id must be a number')
    }

    // Validates that the text is a non-empty string.
    if (typeof text !== 'string' || text.trim().length === 0) {
      throw new Error('text cannot be a empty string')
    }

    this.id = id
    this.text = text.trim()
    // If a empty string then it defaults to 'white'.
    this.color = typeof color === 'string' && color.trim().length > 0 ? color : 'white'
    // Checks that the tags are not an array of empty strings.
    this.tags = removeDuplicateTags(tags)
  }
}

module.exports = { Note }
