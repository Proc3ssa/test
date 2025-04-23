// domUtils.js

// Adds a new div to the DOM with an ID and text
function addElement(id, text) {
    const el = document.createElement('div');
    el.id = id;
    el.textContent = text;
    document.body.appendChild(el);
  }
  
  // Removes a div from the DOM by ID
 function removeElement(id) {
    const el = document.getElementById(id);
    if (el) {
      el.remove();
    }
  }

  module.exports = { addElement, removeElement };