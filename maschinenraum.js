const correctSequence = ['yellow', 'orange', 'blue', 'green', 'red', 'cyan', 'purple', 'white'];

let userSequence = [];

const buttons = document.querySelectorAll('.color-btn');
const resetBtn = document.getElementById('reset-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    // Gedrückt markieren
    button.classList.add('pressed');
    userSequence.push(value);

    if (userSequence.length === correctSequence.length) {
      if (arraysEqual(userSequence, correctSequence)) {
        alert('Richtig! Die Maschine ist deaktiviert. Du erhältst den Schlüssel.');
        addKeyOnce('maschinenraum');
      } else {  
        alert('Falsch! Die Reihenfolge war nicht korrekt.', userSequence);
      }

      buttons.forEach(btn => btn.disabled = true);
    }
  });
});

resetBtn.addEventListener('click', () => {
  userSequence = [];
  buttons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('pressed');
  });
});

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}
