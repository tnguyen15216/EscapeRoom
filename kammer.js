function checkDoor(guardian) {
  // Antwort
  const correct = 'B';

  // Test ob die richtige Div Box ausgewählt wurde
  if (guardian === correct) {
    alert('Richtig! Wächter B trägt den echten Schlüssel. Du erhältst den Schlüssel.');
    // Funktion zum Hinzufügen des Schlüssels
    addKey('kammer'); // optional: Schlüssel im Inventory markieren
  } else {
    alert('Falsch! Dieser Wächter lügt. Versuche es noch einmal.');
  }
}
