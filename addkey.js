function addKeyOnce(roomId) {
    let solved = JSON.parse(localStorage.getItem("solvedRooms")) || [];

    if (!solved.includes(roomId)) {
        solved.push(roomId);
        localStorage.setItem("solvedRooms", JSON.stringify(solved));
    }
}