/**
 * Test file for the Notebook class
 *
 * @file notebook.test.js
 * @author Fatima Alkashaf <fa223ns@student.lnu.se>
 * @version 1.0.0
 */

const { Notebook } = require('../src/notebook.js')

/**
 * Tests creating a notebook and adding notes to it.
 * It also tests the note count and listing.
 */
describe('Notebook CRUD-like options', () => {
  test('this should create, add and count the notes', () => {
    const notebook = new Notebook()
    expect(notebook.isEmpty()).toBe(true)

    const note = notebook.add('Test', { color: 'blue', tags: ['school'] })
    expect(note.id).toBe(1)
    expect(note.color).toBe('blue')
    expect(notebook.count()).toBe(1)
    expect(notebook.list()).toHaveLength(1)
  })

  /**
   * Tests finding a note by its ID, updating it and removing it from the notebook.
   */
  test('this should find, update and remove the notes', () => {
    const notebook = new Notebook()
    notebook.add('The first text')

    expect(notebook.findById(1)[0].text).toBe('The first text')
    expect(notebook.update(1, { text: 'Updated' })[0].text).toBe('Updated')
    expect(notebook.remove(1)).toBe(true)
    expect(notebook.isEmpty()).toBe(true)
  })
})

/**
 * Tests searching for notes by the text, color and tags.
 */
describe('The notebook search functions', () => {
  test('this should search by text, color and tags', () => {
    const notebook = new Notebook()
    notebook.add('A module in JavaScript', { color: 'green', tags: ['code'] })
    notebook.add('Work in JavaScript', { color: 'red', tags: ['work'] })

    expect(notebook.searchByText('module')).toHaveLength(1)
    expect(notebook.findByColor('green')).toHaveLength(1)
    expect(notebook.findByTag('code')).toHaveLength(1)
  })

  /**
   * Tests handling of invalid searches and updates.
   */
  test('this should handle invalid searches', () => {
    const notebook = new Notebook()
    notebook.add('The test note')

    expect(notebook.findById(444)).toEqual([])
    expect(notebook.findById('string')).toEqual([])
    expect(notebook.update(444, { text: 'Invalid id' })).toEqual([])
    expect(notebook.remove(444)).toBe(false)
    expect(notebook.searchByText('')).toEqual([])
    expect(notebook.findByColor('')).toEqual([])
    expect(notebook.findByTag('')).toEqual([])
  })
})

/**
 * Tests getting all the colors, tags and then clearing the notebook.
 */
describe('The notebook metadata', () => {
  test('this should get all colors, tags and then clear all', () => {
    const notebook = new Notebook()
    notebook.add('Note 1', { color: 'blue', tags: ['school'] })
    notebook.add('Note 2', { color: 'green', tags: ['home'] })

    expect(notebook.getAllColors()).toEqual(['blue', 'green'])
    expect(notebook.getAllTags()).toEqual(['school', 'home'])

    notebook.clear()
    expect(notebook.isEmpty()).toBe(true)
    expect(notebook.nextId).toBe(1)
  })
})
