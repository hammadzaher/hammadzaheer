// DOM elements
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

// Function to add item
addButton.addEventListener('click', function() {
    const itemText = itemInput.value.trim();
    if (itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        itemList.appendChild(li);
        itemInput.value = ''; // Clear input field
    } else {
        alert('plaese valid a value!');
    }
});
