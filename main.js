const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        panel.querySelector('button').textContent = '–';
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
        panel.querySelector('button').textContent = '+';
    });
}