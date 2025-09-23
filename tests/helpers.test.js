/**
 * Test file for the helpers functions.
 *
 * @file helpers.test.js
 * @author Fatima Alkashaf <fa223ns@student.lnu.se>
 * @version 1.0.0
 */

const { pickColor, cleanTags, removeDuplicateTags } = require('../src/helpers.js')

/**
 * Tests the pickColor function.
 * Makes sure that it returns the correct color string.
 * Defaults to white if the input is invalid or empty.
 */
describe('pickColor', () => {
  test('this should return the correct color or default to white', () => {
    expect(pickColor('blue')).toBe('blue')
    expect(pickColor('  red  ')).toBe('red')
    expect(pickColor('')).toBe('white')
    expect(pickColor(null)).toBe('white')
  })
})

/**
 * Tests the cleanTags function.
 * Makes sure that it only returns the valid string tags.
 * Trims and filters out the invalid or empty string tags.
 */
describe('cleanTags', () => {
  test('this should filter and trim the valid string tags', () => {
    expect(cleanTags(['school', '  course  ', '', 123, null])).toEqual(['school', 'course'])
    expect(cleanTags(null)).toEqual([])
  })
})

/**
 * Tests the removeDuplicateTags function.
 * Makes sure that it removes the duplicate tags but still keeping the right order of them.
 */
describe('removeDuplicateTags', () => {
  test('this should remove all the duplicate tags while still keeping the right order', () => {
    expect(removeDuplicateTags(['school', 'course', 'school', 'lecture'])).toEqual(['school', 'course', 'lecture'])
    expect(removeDuplicateTags(null)).toEqual([])
  })
})
