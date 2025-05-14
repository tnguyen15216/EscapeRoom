// Get the button pressed sequence from maschinenraum.html and check if it is correct

// Define the correct sequence
const correctSequence = ['green', 'red', 'blue'];

// Store the user's input sequence
let userSequence = [];

// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) => {
        let rightAnswer = true;
        if (userSequence.length < correctSequence.length) {
            event.target.disabled = true;
        }

        // Add the button's value to the user's sequence
        userSequence.push(event.target.value);

        // Check if the sequence matches when the length is the same
        if (userSequence.length === correctSequence.length) {
            for (let i = 0; i < userSequence.length; i++) {
                if (userSequence[i] !== correctSequence[i]) {
                    rightAnswer = false;
                    alert('Wrong sequence. Try again!');
                    break;
                }
            }
        
            if (rightAnswer) {
                alert('Correct!');
            }
            // Reset the user's sequence
            userSequence = [];
            // Re-enable all buttons
            document.querySelectorAll('button').forEach(btn => btn.disabled = false);
        }
    });
});

// (This block is redundant and has been removed to fix the issue)