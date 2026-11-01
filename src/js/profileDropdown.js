console.log('script loaded');
const button = document.getElementById('profile-button');
const dropdownMenu = document.getElementById('profile-menu');

button.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.hidden = !dropdownMenu.hidden;
});

// close when clicking anywhere else
document.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target)) dropdownMenu.hidden = true;
});

// close on Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        dropdownMenu.hidden = true;
    }
})