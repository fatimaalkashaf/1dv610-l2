/**
 * Some helper functions for the colors and tags of a note.
 *
 * @file helpers.js
 * @author Fatima Alkashaf <fa223ns@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Validates and returns the right color string.
 * If the string is invalid then it defaults to 'white'.
 *
 * @param {string} color - The color string to validate
 * @returns {string} - The trimmed color string or 'white' if the string is invalid.
 */
function pickColor (color) {
  // Checks if color is a non-empty string.
  if (typeof color === 'string' && color.trim().length > 0) {
    return color.trim()
  }
  return 'white'
}

/**
 * Cleans the array of tags so it only has the non-empty strings.
 *
 * @param {string[]} tags - The array of tags to clean.
 * @returns {string[]} - An array with only non-empty tags.
 */
function cleanTags (tags) {
  // Returns an empty array if its not an array.
  if (!Array.isArray(tags)) return []

  const result = []
  for (const tag of tags) {
    if (typeof tag === 'string') {
      const trimmed = tag.trim()
      // Keeps only the non-empty strings.
      if (trimmed.length > 0) result.push(trimmed)
    }
  }
  return result
}

/**
 * Removes any duplicate tags from an array.
 *
 * @param {string[]} tags - The array of the tags.
 * @returns {string[]} - An array with only the unique tags.
 */
function removeDuplicateTags (tags) {
  if (!Array.isArray(tags)) return []

  const unique = []
  for (const tag of tags) {
    if (typeof tag === 'string') {
      const clean = tag.trim()
      // Adds the tag if its not already in the array.
      if (clean.length > 0 && !unique.includes(clean)) {
        unique.push(clean)
      }
    }
  }
  return unique // All the unique tags.
}

module.exports = { pickColor, cleanTags, removeDuplicateTags }
