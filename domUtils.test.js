// domUtils.test.js

const { addElement, removeElement } = require('./domUtils');

test('addElement should add a div with the given id and text', () => {
  addElement('my-div', 'Hello Jest');

  const el = document.getElementById('my-div');
  expect(el).not.toBeNull();
  expect(el.textContent).toBe('Hello Jest');
});

test('removeElement should remove the div with the given id', () => {
  // Add first so we can remove it
  addElement('delete-me', 'Bye');
  removeElement('delete-me');

  const el = document.getElementById('delete-me');
  expect(el).toBeNull();
});
