// scripts.js

// JavaScript to handle animations or additional interactivity
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const featureId = button.parentElement.parentElement.id;
            showMore(featureId);
        });
    });
});

function showMore(featureId) {
    alert(`More details about ${featureId}`);
}
