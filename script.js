//your code here!

document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById('infi-list');
    let itemCount = 10; // Initial number of items

    // Function to create a list item
    function createListItem(text) {
        const listItem = document.createElement('li');
        listItem.textContent = text;
        return listItem;
    }

    // Function to add initial items to the list
    function addInitialItems() {
        for (let i = 1; i <= itemCount; i++) {
            list.appendChild(createListItem(`Item ${i}`));
        }
    }

    // Function to add more items when scrolling
    function addMoreItems() {
        for (let i = 1; i <= 2; i++) {
            itemCount++;
            list.appendChild(createListItem(`Item ${itemCount}`));
        }
    }

    // Event listener for scrolling within the list element
    list.addEventListener('scroll', () => {
        // Check if user has scrolled to the bottom of the list
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            addMoreItems();
        }
    });

    // Initialize the list with default items
    addInitialItems();
});
