document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const submitButton = document.getElementById('submitButton');

    if (!username || !password) {
        moveButton(submitButton);
    } else {
        alert('Form submitted successfully!');
    }
});

function moveButton(button) {
    const offsetX = Math.random() * 300 - 150; // Random offset between -150 and 150
    const offsetY = Math.random() * 100 - 50;  // Random offset between -50 and 50
    button.style.position = 'relative';
    button.style.left = `${offsetX}px`;
    button.style.top = `${offsetY}px`;
}
