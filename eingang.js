function checkAnswer() {
    // Antwort
    const answer = 15;
    // Benutzerinput
    const userInput = document.getElementById("input").value;

    // Überprüfen, ob der Benutzerinput mit der Antwort übereinstimmt
    if (userInput == answer) {
        alert("Correct!");
        // Schlüssel hinzufügen, wenn die Antwort korrekt ist
        addKeyOnce("eingang");
    }
    else {
        alert("Incorrect! Please try again.");
    }
}