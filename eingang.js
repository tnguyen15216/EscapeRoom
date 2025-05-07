function checkAnswer() {
    const answer = 17;
    const userInput = document.getElementById("input").value;

    if (userInput == answer) {
        alert("Correct! You may enter the room.");
    }
    else {
        alert("Incorrect! Please try again.");
    }
}