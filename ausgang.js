window.addEventListener("DOMContentLoaded", () => {
    const keyImages = document.querySelectorAll(".key-img");
    const door = document.querySelector(".exit-door");
    const message = document.getElementById("message");

    const solved = JSON.parse(localStorage.getItem("solvedRooms")) || [];

    solved.forEach((_, i) => {
        if (i < keyImages.length) { 
            keyImages[i].style.opacity = "1";
        }
    });

    if (solved.length >= 5) {
        door.style.pointerEvents = "auto";
        door.style.opacity = "1";
        message.textContent = "Alle Schlüssel gesammelt! Du kannst die Tür öffnen.";
    } else {
        door.style.pointerEvents = "none";
        door.style.opacity = "0.5";
    }
});

function openDoor() {
      const solved = JSON.parse(localStorage.getItem("solvedRooms")) || [];
      const requiredRooms = ["eingang", "compiler", "kammer", "maschinenraum", "steuerzentrale"];

      const allSolved = requiredRooms.every(room => solved.includes(room));
      if (allSolved) {
        alert("Du hast alle Schlüssel gesammelt! Die Tür öffnet sich...");
        // Optional: window.location.href = "endsequenz.html";
      } else {
        alert("Dir fehlen noch Schlüssel – löse alle Räume zuerst!");
      }
    }


