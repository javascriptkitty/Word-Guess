var guessesLeft;
var lettersGuessed;
var image;
var currentWord;
var band;
var usersWord = [];

function initGame() {
  guessesLeft = 12;
  usersGuessesLeft = document.getElementById("guessesLeft");
  usersGuessesLeft.textContent = guessesLeft;
  lettersGuessed = "";
  usersLettersGuessed = document.getElementById("guessed");
  currentImage = document.getElementById("foto");
  band = getRandom(bands);
  currentImage.setAttribute("src", band.link);
  currentWord = writeName(band.name);
  usersLettersGuessed.textContent = lettersGuessed;
}

var bands = [
  { link: "assets/images/band1.jpeg", name: "MISFITS" },
  { link: "assets/images/band2.jpg", name: "RAMONES" },
  { link: "assets/images/band3.jpg", name: "RAMMSTEIN" },
  { link: "assets/images/band4.jpg", name: "GARBAGE" },
  { link: "assets/images/band5.jpg", name: "NIRVANA" },
  { link: "assets/images/band6.jpg", name: "KORN" }
];

function getRandom(list) {
  var random = list[Math.floor(Math.random() * list.length)];
  return random;
}

function writeName(word) {
  document.getElementById("word");
  for (var i = 0; i < word.length; i++) {
    var box = document.createElement("div");
    var letter = document.getElementById("word").appendChild(box);
    letter.textContent = word[i];
    letter.classList.add(word[i]);
  }
}

function game() {
  initGame();

  document.onkeyup = function(event) {
    var letter = event.key.toUpperCase();
    usersLettersGuessed.textContent = usersLettersGuessed.textContent.concat(
      letter
    );

    for (var i = 0; i < band.name.length; i++) {
      if (letter === band.name[i]) {
        //debugger;
        usersWord.push(letter);
        var found = document.querySelectorAll("." + letter);
        found.forEach(function(element) {
          element.style.color = "darkred";
        });
      }
    }

    if (
      band.name
        .split("")
        .sort()
        .join() === usersWord.sort().join()
    ) {
      alert("YOU WIN!");
      location.reload();
      return;
    }

    guessesLeft--;
    usersGuessesLeft.textContent = guessesLeft;
    if (guessesLeft === 0) {
      alert("YOU LOST! THE BAND NAME'S IS " + band.name);
      location.reload();
    }
  };
}

window.onload = game;
