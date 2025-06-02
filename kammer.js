function checkDoor(guardian) {
  const correct = 'B'; // Wächter B hat den Schlüssel
  if (guardian === correct) {
    alert('Richtig! Wächter B trägt den echten Schlüssel. Du erhältst den Schlüssel.');
    addKey('kammer'); // optional: Schlüssel im Inventory markieren
  } else {
    alert('Falsch! Dieser Wächter lügt. Versuche es noch einmal.');
  }
}
