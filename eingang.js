function checkAnswer() {
    const answer = 15;
    const userInput = document.getElementById("input").value;

    if (userInput == answer) {
        alert("Correct!");
        addKeyOnce("eingang");
    }
    else {
        alert("Incorrect! Please try again.");
    }
}