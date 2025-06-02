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

// Funktion zum Testen, ob der Schlüssel bereits erhalten wurde
window.addEventListener("DOMContentLoaded", () => {
  const solved = JSON.parse(localStorage.getItem("solvedRooms")) || [];

  if (solved.includes("eingang")) {
    alert("Du hast den Schlüssel für den Maschinenraum bereits erhalten.");
  }
});