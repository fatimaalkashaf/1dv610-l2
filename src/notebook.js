/**
 * The Notebook class that can contain multiple Note objects.
 *
 * @file notebook.js
 * @author Fatima Alkashaf <fa223ns@student.lnu.se>
 * @version 1.0.0
 */

const { Note } = require('./note.js')
const { pickColor, cleanTags } = require('./helpers.js')

/**
 * The notebook class that creates a new empty notebook.
 */
class Notebook {
  /**
   * Creates a new empty notebook.
   */
  constructor () {
    this.notes = []
    this.nextId = 1
  }

  /**
   * Adds a new note to the notebook.
   *
   * @param {string} text - The text of the new note.
   * @param {object} options - The optional colors and tags for the note.
   * @returns {Note} - The created note object.
   */
  add (text, options = {}) {
    const note = new Note(
      this.nextId,
      text,
      pickColor(options.color),
      cleanTags(options.tags)
    )
    this.notes.push(note)
    this.nextId++
    return note
  }

  /**
   * Updates an already existing note.
   *
   * @param {number} id - The unique ID of the note to update.
   * @param {object} fields - The fields to update.
   * @returns {Note[]} - The updated note or an empty array if the note does not exist.
   */
  update (id, fields = {}) {
    const note = this.notes.find(n => n.id === id)
    if (!note) return []

    // Updates the text content.
    if (typeof fields.text === 'string' && fields.text.trim().length > 0) {
      note.text = fields.text.trim()
    }
    // Updates the color of the text.
    if (typeof fields.color === 'string' && fields.color.trim().length > 0) {
      note.color = fields.color.trim()
    }

    // Updates the tags of the text.
    if (Array.isArray(fields.tags)) {
      note.tags = cleanTags(fields.tags)
    }

    return [note]
  }

  /**
   * Deletes a note by its ID.
   *
   * @param {number} id - The unique ID of the note to delete.
   * @returns {boolean} - If the note was deleted or not.
   */
  remove (id) {
    const before = this.notes.length
    this.notes = this.notes.filter(n => n.id !== id)
    return this.notes.length < before
  }

  /**
   * Returns a copy of all the notes.
   *
   * @returns {Note[]} - An array that contains all of the notes.
   */
  list () {
    return this.notes.slice()
  }

  /**
   * Finds a note by its ID.
   *
   * @param {number} id - The ID of the note to find.
   * @returns {Note[]} - The right note or an empty array if the note is not found.
   */
  findById (id) {
    if (typeof id !== 'number') return []

    for (const note of this.notes) {
      if (note.id === id) {
        return [note]
      }
    }
    return []
  }

  /**
   * Searches for a note/notes by its text content.
   *
   * @param {string} searchText - The text to search for.
   * @returns {Note[]} - An array of the notes that contains the given text search.
   */
  searchByText (searchText) {
    if (typeof searchText !== 'string' || searchText.trim().length === 0) return []

    const search = searchText.toLowerCase().trim()
    const results = []

    for (const note of this.notes) {
      // Adds the note to the results if it contains the given text search.
      if (note.text.toLowerCase().includes(search)) {
        results.push(note)
      }
    }
    return results
  }

  /**
   * Finds a note/notes by its color.
   *
   * @param {string} color - The color to search for.
   * @returns {Note[]} - An array of the note/notes with the specified color.
   */
  findByColor (color) {
    if (typeof color !== 'string' || color.trim().length === 0) return []

    const searchColor = color.toLowerCase().trim()
    const results = []

    for (const note of this.notes) {
      // Adds the note/notes to the results if it contains the given color.
      if (note.color.toLowerCase() === searchColor) {
        results.push(note)
      }
    }
    return results
  }

  /**
   * Finds a note/note that have a specific tag.
   *
   * @param {string} tag - The tag to search for.
   * @returns {Note[]} - An array of the note/notes that have have the specified tag.
   */
  findByTag (tag) {
    if (typeof tag !== 'string' || tag.trim().length === 0) return []

    const searchTag = tag.toLowerCase().trim()
    const results = []

    for (const note of this.notes) {
      // Goes through each tag of the current note.
      for (const noteTag of note.tags) {
        // Adds the note to the results and stop checking it if it contains the given tag.
        if (noteTag.toLowerCase() === searchTag) {
          results.push(note)
          break
        }
      }
    }
    return results
  }

  /**
   * Counts all of the notes.
   *
   * @returns {number} - How many notes there is in the notebook.
   */
  count () {
    return this.notes.length
  }

  /**
   * Checks if the notebooks is empty.
   *
   * @returns {boolean} - True if the notebook is empty otherwise false.
   */
  isEmpty () {
    if (this.notes.length === 0) {
      return true
    }
    return false
  }

  /**
   * Gets all of the colors that is used in the notes.
   *
   * @returns {string[]} - An array of all the colors.
   */
  getAllColors () {
    const colors = []
    for (const note of this.notes) {
      if (!colors.includes(note.color)) {
        colors.push(note.color)
      }
    }
    return colors
  }

  /**
   * Gets all of the tags that is used in the notes.
   *
   * @returns {string[]} - An array of all the tags.
   */
  getAllTags () {
    const tags = []
    for (const note of this.notes) {
      for (const tag of note.tags) {
        if (!tags.includes(tag)) {
          tags.push(tag)
        }
      }
    }
    return tags
  }

  /**
   * Clears all of the notes in the notebook.
   */
  clear () {
    this.notes = []
    this.nextId = 1
  }
}

module.exports = { Notebook }
