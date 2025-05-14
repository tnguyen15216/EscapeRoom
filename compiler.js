function checkAnswer() {
    const answer = "Du kommst hier niemals raus.";
    const userInput = document.getElementById("input").value;
    if (userInput == answer) {
        alert("Correct!");
    }
    else {
        alert("Incorrect! Please try again.");
    }
}