let keysPressed = {};

$(document).ready(function() {

    const $valueSpan = $('.valueSpan');
    const $value = $('#customRange');
    $valueSpan.html($value.val());
    $value.on('input change', () => {
  
      $valueSpan.html($value.val());
    });
  });

document.addEventListener("keydown", function(event) {
    keysPressed[event.key] = true;
    makeSound(event.key);
    buttonAnimation();
});

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
 });

 var note = document.getElementById("note");
 var currentNote = "";
 var playMetronome;

function makeSound(key) {
    if (keysPressed['ArrowUp']) {
        if (keysPressed['ArrowLeft']) {
            switch(key) {
                case "a":
                    var a5b = new Audio("sounds/g-5.mp3");
                    a5b.play();
                    note.innerHTML = "Ab5";
                    note.className = "btn btn-danger btn-lg";
                    currentNote = "g-5";
                    break;
                case "b":
                    var b5b = new Audio("sounds/a-5.mp3");
                    b5b.play();
                    note.innerHTML = "Bb5";
                    note.className = "btn btn-warning btn-lg";
                    currentNote = "a-5";
                    break;
                case "c":
                    var c5b = new Audio("sounds/b5.mp3");
                    c5b.play();
                    note.innerHTML = "Cb5";
                    note.className = "btn btn-success btn-lg";
                    currentNote = "b5";
                    break;
                case "d":
                    var d5b = new Audio("sounds/c-5.mp3");
                    d5b.play();
                    note.innerHTML = "Db5";
                    note.className = "btn btn-info btn-lg";
                    currentNote = "c-5";
                    break;
                case "e":
                    var e5b = new Audio("sounds/d-5.mp3");
                    e5b.play();
                    note.innerHTML = "Eb5";
                    note.className = "btn btn-primary btn-lg";
                    currentNote = "d-5";
                    break;
                case "f":
                    var f5b = new Audio("sounds/e5.mp3");
                    f5b.play();
                    note.innerHTML = "Fb5";
                    note.className = "btn btn-secondary btn-lg";
                    currentNote = "e5";
                    break;
                case "g":
                    var g5b = new Audio("sounds/f-5.mp3");
                    g5b.play();
                    note.innerHTML = "Gb5";
                    note.className = "btn btn-dark btn-lg";
                    currentNote = "f-5";
                    break;
                default: 
                    console.log(key);
            }
        } else if (keysPressed['ArrowRight']) {
            switch(key) {
                case "a":
                    var a5s = new Audio("sounds/a-5.mp3");
                    a5s.play();
                    note.innerHTML = "A#5";
                    note.className = "btn btn-danger btn-lg";
                    currentNote = "a-5";
                    break;
                case "b":
                    var b5s = new Audio("sounds/c6.mp3");
                    b5s.play();
                    note.innerHTML = "B#6";
                    note.className = "btn btn-warning btn-lg";
                    currentNote = "c-6";
                    break;
                case "c":
                    var c5s = new Audio("sounds/c-5.mp3");
                    c5s.play();
                    note.innerHTML = "C#5";
                    note.className = "btn btn-success btn-lg";
                    currentNote = "c-5";
                    break;
                case "d":
                    var d5s = new Audio("sounds/d-5.mp3");
                    d5s.play();
                    note.innerHTML = "D#5";
                    note.className = "btn btn-info btn-lg";
                    currentNote = "d-5";
                    break;
                case "e":
                    var e5s = new Audio("sounds/f5.mp3");
                    e5s.play();
                    note.innerHTML = "E#5";
                    note.className = "btn btn-primary btn-lg";
                    currentNote = "e-5";
                    break;
                case "f":
                    var f5s = new Audio("sounds/f-5.mp3");
                    f5s.play();
                    note.innerHTML = "F#5";
                    note.className = "btn btn-secondary btn-lg";
                    currentNote = "f-5";
                    break;
                case "g":
                    var g5s = new Audio("sounds/g-5.mp3");
                    g5s.play();
                    note.innerHTML = "G#5";
                    note.className = "btn btn-dark btn-lg";
                    currentNote = "g-5";
                    break;
                default: 
                    console.log(key);
            }
        } else {
            switch(key) {
                case "a":
                    var a5 = new Audio("sounds/a5.mp3");
                    a5.play();
                    note.innerHTML = "A5";
                    note.className = "btn btn-danger btn-lg";
                    currentNote = "a5";
                    break;
                case "b":
                    var b5 = new Audio("sounds/b5.mp3");
                    b5.play();
                    note.innerHTML = "B5";
                    note.className = "btn btn-warning btn-lg";
                    currentNote = "b5";
                    break;
                case "c":
                    var c5 = new Audio("sounds/c5.mp3");
                    c5.play();
                    note.innerHTML = "C5";
                    note.className = "btn btn-success btn-lg";
                    currentNote = "c5";
                    break;
                case "d":
                    var d5 = new Audio("sounds/d5.mp3");
                    d5.play();
                    note.innerHTML = "D5";
                    note.className = "btn btn-info btn-lg";
                    currentNote = "d5";
                    break;
                case "e":
                    var e5 = new Audio("sounds/e5.mp3");
                    e5.play();
                    note.innerHTML = "E5";
                    note.className = "btn btn-primary btn-lg";
                    currentNote = "e5";
                    break;
                case "f":
                    var f5 = new Audio("sounds/f5.mp3");
                    f5.play();
                    note.innerHTML = "F5";
                    note.className = "btn btn-secondary btn-lg";
                    currentNote = "f5";
                    break;
                case "g":
                    var g5 = new Audio("sounds/g5.mp3");
                    g5.play();
                    note.innerHTML = "G5";
                    note.className = "btn btn-dark btn-lg";
                    currentNote = "g5";
                    break;
                default: 
                    console.log(key);
            }
        }
    } else if (keysPressed['ArrowDown']) {
        if (keysPressed['ArrowLeft']) {
            switch(key) {
                case "a":
                    var a3b = new Audio("sounds/g-3.mp3");
                    a3b.play();
                    note.innerHTML = "Ab3";
                    note.className = "btn btn-danger btn-lg";
                    currentNote = "g-3";
                    break;
                case "b":
                    var b3b = new Audio("sounds/a-3.mp3");
                    b3b.play();
                    note.innerHTML = "Bb3";
                    note.className = "btn btn-warning btn-lg";
                    currentNote = "a-3";
                    break;
                case "c":
                    var c3b = new Audio("sounds/b3.mp3");
                    c3b.play();
                    note.innerHTML = "Cb3";
                    note.className = "btn btn-success btn-lg";
                    currentNote = "b3";
                    break;
                case "d":
                    var d3b = new Audio("sounds/c-3.mp3");
                    d3b.play();
                    note.innerHTML = "Db3";
                    note.className = "btn btn-info btn-lg";
                    currentNote = "c-3";
                    break;
                case "e":
                    var e3b = new Audio("sounds/d-3.mp3");
                    e3b.play();
                    note.innerHTML = "Eb3";
                    note.className = "btn btn-primary btn-lg";
                    currentNote = "d-3";
                    break;
                case "f":
                    var f3b = new Audio("sounds/e3.mp3");
                    f3b.play();
                    note.innerHTML = "Fb3";
                    note.className = "btn btn-secondary btn-lg";
                    currentNote = "e3";
                    break;
                case "g":
                    var g3b = new Audio("sounds/f-3.mp3");
                    g3b.play();
                    note.innerHTML = "Gb3";
                    note.className = "btn btn-dark btn-lg";
                    currentNote = "f-3";
                    break;
                default: 
                    console.log(key);
            }
        } else if (keysPressed['ArrowRight']) {
            switch(key) {
                case "a":
                    var a3s = new Audio("sounds/a-3.mp3");
                    a3s.play();
                    note.innerHTML = "A#3";
                    note.className = "btn btn-danger btn-lg";
                    currentNote = "a-3";
                    break;
                case "b":
                    var b3s = new Audio("sounds/c4.mp3");
                    b3s.play();
                    note.innerHTML = "B#3";
                    note.className = "btn btn-warning btn-lg";
                    currentNote = "c4";
                    break;
                case "c":
                    var c4s = new Audio("sounds/c-3.mp3");
                    c4s.play();
                    note.innerHTML = "C#3";
                    note.className = "btn btn-success btn-lg";
                    currentNote = "c-3";
                    break;
                case "d":
                    var d4s = new Audio("sounds/d-3.mp3");
                    currentNote = "d-4";
                    d4s.play();
                    note.innerHTML = "D#3";
                    note.className = "btn btn-info btn-lg";
                    currentNote = "d-3";
                    break;
                case "e":
                    var e4s = new Audio("sounds/f3.mp3");
                    e4s.play();
                    note.innerHTML = "E#3";
                    note.className = "btn btn-primary btn-lg";
                    currentNote = "f3";
                    break;
                case "f":
                    var f4s = new Audio("sounds/f-3.mp3");
                    f4s.play();
                    note.innerHTML = "F#3";
                    note.className = "btn btn-secondary btn-lg";
                    currentNote = "f-3";
                    break;
                case "g":
                    var g4s = new Audio("sounds/g-3.mp3");
                    g4s.play();
                    note.innerHTML = "G#3";
                    note.className = "btn btn-dark btn-lg";
                    currentNote = "g-3";
                    break;
                default: 
                    console.log(key);
            }
        } else {
            switch(key) {
                case "a":
                    var a3 = new Audio("sounds/a3.mp3");
                    a3.play();
                    note.innerHTML = "A3";
                    note.className = "btn btn-danger btn-lg";
                    currentNote = "a3";
                    break;
                case "b":
                    var b3 = new Audio("sounds/b3.mp3");
                    b3.play();
                    note.innerHTML = "B3";
                    note.className = "btn btn-warning btn-lg";
                    currentNote = "b3";
                    break;
                case "c":
                    var c3 = new Audio("sounds/c3.mp3");
                    c3.play();
                    note.innerHTML = "C3";
                    note.className = "btn btn-success btn-lg";
                    currentNote = "c3";
                    break;
                case "d":
                    var d3 = new Audio("sounds/d3.mp3");
                    d3.play();
                    note.innerHTML = "D3";
                    note.className = "btn btn-info btn-lg";
                    currentNote = "d3";
                    break;
                case "e":
                    var e3 = new Audio("sounds/e3.mp3");
                    e3.play();
                    note.innerHTML = "E3";
                    note.className = "btn btn-primary btn-lg";
                    currentNote = "e3";
                    break;
                case "f":
                    var f3 = new Audio("sounds/f3.mp3");
                    f3.play();
                    note.innerHTML = "F3";
                    note.className = "btn btn-secondary btn-lg";
                    currentNote = "f3";
                    break;
                case "g":
                    var g3 = new Audio("sounds/g3.mp3");
                    g3.play();
                    note.innerHTML = "G3";
                    note.className = "btn btn-dark btn-lg";
                    currentNote = "g3";
                    break;
                default: 
                    console.log(key);
            }
        }
    } else {
        if (keysPressed['ArrowLeft']) {
            switch(key) {
                case "a":
                    var a4b = new Audio("sounds/g-4.mp3");
                    a4b.play();
                    note.innerHTML = "Ab4";
                    note.className = "btn btn-danger btn-lg";
                    currentNote = "g-4";
                    break;
                case "b":
                    var b4b = new Audio("sounds/a-4.mp3");
                    b4b.play();
                    note.innerHTML = "B4b";
                    note.className = "btn btn-warning btn-lg";
                    currentNote = "a-4";
                    break;
                case "c":
                    var c4b = new Audio("sounds/b4.mp3");
                    c4b.play();
                    note.innerHTML = "Cb";
                    note.className = "btn btn-success btn-lg";
                    currentNote = "b4";
                    break;
                case "d":
                    var d4b = new Audio("sounds/c-4.mp3");
                    d4b.play();
                    note.innerHTML = "Db4";
                    note.className = "btn btn-info btn-lg";
                    currentNote = "c-4";
                    break;
                case "e":
                    var e4b = new Audio("sounds/d-4.mp3");
                    e4b.play();
                    note.innerHTML = "Eb4";
                    note.className = "btn btn-primary btn-lg";
                    currentNote = "d-4";
                    break;
                case "f":
                    var f4b = new Audio("sounds/e4.mp3");
                    f4b.play();
                    note.innerHTML = "Fb4";
                    note.className = "btn btn-secondary btn-lg";
                    currentNote = "e4";
                    break;
                case "g":
                    var g4b = new Audio("sounds/f-4.mp3");
                    g4b.play();
                    note.innerHTML = "Gb4";
                    note.className = "btn btn-dark btn-lg";
                    currentNote = "f-4";
                    break;
                default: 
                    console.log(key);
            }
        } else if (keysPressed['ArrowRight']) {
            switch(key) {
                case "a":
                    var a4s = new Audio("sounds/a-4.mp3");
                    a4s.play();
                    note.innerHTML = "A#4";
                    note.className = "btn btn-danger btn-lg";
                    currentNote = "a-4";
                    break;
                case "b":
                    var b4s = new Audio("sounds/c4.mp3");
                    b4s.play();
                    note.innerHTML = "B#4";
                    note.className = "btn btn-warning btn-lg";
                    currentNote = "c4";
                    break;
                case "c":
                    var c4s = new Audio("sounds/c-4.mp3");
                    c4s.play();
                    note.innerHTML = "C#4";
                    note.className = "btn btn-success btn-lg";
                    currentNote = "c-4";
                    break;
                case "d":
                    var d4s = new Audio("sounds/d-4.mp3");
                    d4s.play();
                    note.innerHTML = "D#4";
                    note.className = "btn btn-info btn-lg";
                    currentNote = "d-4";
                    break;
                case "e":
                    var e4s = new Audio("sounds/f4.mp3");
                    e4s.play();
                    note.innerHTML = "E#4";
                    note.className = "btn btn-primary btn-lg";
                    currentNote = "f4";
                    break;
                case "f":
                    var f4s = new Audio("sounds/f-4.mp3");
                    f4s.play();
                    note.innerHTML = "F#4";
                    note.className = "btn btn-secondary btn-lg";
                    currentNote = "f-4";
                    break;
                case "g":
                    var g4s = new Audio("sounds/g-4.mp3");
                    g4s.play();
                    note.innerHTML = "G#4";
                    note.className = "btn btn-dark btn-lg";
                    currentNote = "g-4";
                    break;
                default: 
                    console.log(key);
            }
        } else {
            switch(key) {
                case "a":
                    var a4 = new Audio("sounds/a4.mp3");
                    a4.play();
                    note.innerHTML = "A4";
                    note.className = "btn btn-danger btn-lg";
                    currentNote = "a4";
                    break;
                case "b":
                    var b4 = new Audio("sounds/b4.mp3");
                    b4.play();
                    note.innerHTML = "B4";
                    note.className = "btn btn-warning btn-lg";
                    currentNote = "b4";
                    break;
                case "c":
                    var c4 = new Audio("sounds/c4.mp3");
                    c4.play();
                    note.innerHTML = "C4";
                    note.className = "btn btn-success btn-lg";
                    currentNote = "c4";
                    break;
                case "d":
                    var d4 = new Audio("sounds/d4.mp3");
                    d4.play();
                    note.innerHTML = "D4";
                    note.className = "btn btn-info btn-lg";
                    currentNote = "d4";
                    break;
                case "e":
                    var e4 = new Audio("sounds/e4.mp3");
                    e4.play();
                    note.innerHTML = "E4";
                    note.className = "btn btn-primary btn-lg";
                    currentNote = "e4";
                    break;
                case "f":
                    var f4 = new Audio("sounds/f4.mp3");
                    f4.play();
                    note.innerHTML = "F4";
                    note.className = "btn btn-secondary btn-lg";
                    currentNote = "f4";
                    break;
                case "g":
                    var g4 = new Audio("sounds/g4.mp3");
                    g4.play();
                    note.innerHTML = "G4";
                    note.className = "btn btn-dark btn-lg";
                    currentNote = "g4";
                    break;
                default: 
                    console.log(key);
            }
        }
    }
}

function playNote(element) {
    var clickedNote = element.id
    var splitNotes = clickedNote.split("");
    var noteLetter = splitNotes[0];
    switch(noteLetter) {
        case "a":
            note.className = "btn btn-danger btn-lg";
            break;
        case "b":
            note.className = "btn btn-warning btn-lg";
            break;
        case "c":
            note.className = "btn btn-success btn-lg";
            break;
        case "d":
            note.className = "btn btn-info btn-lg";
            break;
        case "e":
            note.className = "btn btn-primary btn-lg";
            break;
        case "f":
            note.className = "btn btn-secondary btn-lg";
            break;
        case "g":
            note.className = "btn btn-dark btn-lg";
            break;
        default: 
            console.log(key);
    }
    var currentAudio = new Audio("sounds/" + clickedNote + ".mp3");
    currentAudio.play();
    var current2Note = clickedNote.replace("-", "#");
    var returnNote = current2Note.toUpperCase();
    currentNote = clickedNote;
    note.innerHTML = returnNote;

    buttonAnimation();
}

function buttonAnimation() {
    if (currentNote !== "") {
        var delayInMilliseconds = 100; 
        var activeButton = document.querySelector("#" + currentNote);
        activeButton.classList.add("pressed");
    
        setTimeout(function() {
            activeButton.classList.remove("pressed");
         }, delayInMilliseconds);
        currentNote = "";
    }
}

function toggleMetronome() {
    console.log("HERE");
    // Get the checkbox
    var checkBox = document.getElementById("inlineCheckbox1");
    
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        const $value = $("#customRange");
        var currentBpm = $value.val();
        clearInterval(playMetronome);
        playMetronome = setInterval(function() {
            var click = new Audio("sounds/click.mp3");
            click.play(); 
        }, 60000 / currentBpm);
    } else {
        clearInterval(playMetronome);
    }
}