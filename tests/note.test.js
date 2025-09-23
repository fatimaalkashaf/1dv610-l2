/**
 * Test file for the Note class.
 *
 * @file note.test.js
 * @author Fatima Alkashaf <fa223ns@student.lnu.se>
 * @version 1.0.0
 */

const { Note } = require('../src/note.js')

/**
 * Test that a note is created with the right default values.
 */
describe('The note creation', () => {
  test('this should create a valid note with defaults', () => {
    const note = new Note(1, 'The test note')
    expect(note.id).toBe(1)
    expect(note.text).toBe('The test note')
    expect(note.color).toBe('white')
    expect(note.tags).toEqual([])
  })

  /**
   * Test that a note can handle optional values and filter duplicate tags.
   */
  test('this should handle optional values and duplicate tags', () => {
    const note = new Note(2, '  Text  ', 'green', ['tag1', 'tag2', 'tag1'])
    expect(note.text).toBe('Text')
    expect(note.color).toBe('green')
    expect(note.tags).toEqual(['tag1', 'tag2'])
  })
})

/**
 * Tests that creating a note with a invalid id throws an error.
 */
describe('The note validation', () => {
  test('this should throw error for a invalid id', () => {
    expect(() => new Note('1', 'Text')).toThrow('id must be a number')
  })

  /**
   * Tests that creating a note with an empty or blank text throws an error.
   */
  test('this should throw error for a invalid text', () => {
    expect(() => new Note(1, '')).toThrow('text cannot be an empty string')
    expect(() => new Note(1, '   ')).toThrow('text cannot be an empty string')
  })
})
