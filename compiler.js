function checkAnswer() {
    // Antwort
    const answer = "Du kommst hier niemals raus.";
    // Benutzerinput
    const userInput = document.getElementById("input").value;
    // Überprüfen, ob der Benutzerinput mit der Antwort übereinstimmt
    if (userInput == answer) {
        alert("Correct!");
        // Schlüssel hinzufügen
        addKeyOnce("compiler");
    }
    else {
        alert("Incorrect! Please try again.");
    }
}