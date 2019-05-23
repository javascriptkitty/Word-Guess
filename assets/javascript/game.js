var guessesLeft;
var lettersGuessed;
var image;
var currentWord;
var band;

function resetGame() {
  guessesLeft = 12;
  usersGuessesLeft = document.getElementById("guessesLeft");
  lettersGuessed = "";
  usersLettersGuessed = document.getElementById("guessed");
  usersLettersGuessed.textContent = lettersGuessed;
  currentImage = document.createElement("img");
  currentImage.setAttribute("width", "300px");

  band = getRandom(bands);
  currentImage.setAttribute("src", band.link);
  document.getElementById("image").appendChild(currentImage);
  currentWord = writeName(band.name);
  usersGuessesLeft.textContent = guessesLeft;
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
  for (var i = 0; i < word.length; i++) {
    var box = document.createElement("div");
    var letter = document.getElementById("word").appendChild(box);
    letter.textContent = word[i];
    letter.classList.add(word[i]);
  }
}
var usersWord = [];
function game() {
  resetGame();
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
    if (usersWord.length === band.name.length) {
      alert("YOU WIN!");
    }
    guessesLeft--;
    usersGuessesLeft.textContent = guessesLeft;
    if (guessesLeft === 0) {
      alert("YOU LOST! THE BAND NAME'S IS " + band.name);
    }
  };
}

window.onload = game;
