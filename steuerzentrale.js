var answer = [];

function changeText(number) {
    document.getElementById("screenText").innerHTML = number;
}

function randomNumber() {
    const arr = [];
    for (i = 0; i < 3; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

function startSequence() {
    answer = randomNumber();
    for(let i = 0; i < answer.length; i++) {
        setTimeout(() => {
            changeText(answer[i]);
        }, i * 1000);
    }
    document.getElementById("startBtn").disabled = true;
}
function checkSequence() {
    const input = [];
    input.push(Number(document.getElementById("input").value));
    input.push(Number(document.getElementById("input2").value));
    input.push(Number(document.getElementById("input3").value));
    if ( input.every((val, index) => val === answer[index])) {
        alert("Correct! You may enter the room.");
    } else {
        alert("Incorrect! Please try again.");
    }
}


