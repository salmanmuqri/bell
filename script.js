document.getElementById('bell').addEventListener('click', function() {
    // List of sound IDs
    const sounds = [
        document.getElementById('bell1'),
        document.getElementById('bell2'),
        document.getElementById('bell3'),
    ];

    // Get a random sound
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const randomSound = sounds[randomIndex];

    // Play the selected sound
    randomSound.play();
});
