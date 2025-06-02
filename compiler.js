function checkAnswer() {
    const answer = "Du kommst hier niemals raus.";
    const userInput = document.getElementById("input").value;
    if (userInput == answer) {
        alert("Correct!");
        let keys = parseInt(localStorage.getItem("keys")) || 0;
        addKeyOnce("compiler");
    }
    else {
        alert("Incorrect! Please try again.");
    }
}