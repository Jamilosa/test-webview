document.addEventListener('DOMContentLoaded', (event) => {
    const listItems = document.querySelectorAll('li');

    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = 'blue'; // Change this to the desired hover color
        });

        item.addEventListener('mouseout', () => {
            item.style.color = 'black'; // Change this to the original color
        });
    });
});
