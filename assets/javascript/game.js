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

  band = getRandom(bands);

  currentWord = writeName(band.name);
  usersLettersGuessed.textContent = lettersGuessed;
}

var bands = [
  {
    link: "assets/images/band1.jpeg",
    name: "MISFITS",
    musLink:
      "http://98.157.74.38/MUSIC/Jack%20Connoly/The%20Misfits/Unknown%20album/Misfits%20-%20Mommy,%20Can%20I%20Go%20Out%20And%20Kill%20Tonight.0001.mp3"
  },
  {
    link: "assets/images/band2.jpg",
    name: "RAMONES",
    musLink: "http://9092.ultratv100.com:9090/music/The%20Ramones/"
  },
  {
    link: "assets/images/band3.jpg",
    name: "RAMMSTEIN",
    musLink:
      "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Rammstein/Rammstein%20'Du%20Hast'.mp3"
  },
  {
    link: "assets/images/band4.jpg",
    name: "GARBAGE",
    musLink:
      "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Garbage/Garbage%20'Cherry%20Lips%20(Go%20Baby%20Go)'.mp3"
  },
  {
    link: "assets/images/band5.jpg",
    name: "NIRVANA",
    musLink:
      "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Nirvana/Nirvana%20'Come%20As%20You%20Are'.mp3"
  },
  {
    link: "assets/images/band6.jpg",
    name: "KORN",
    musLink:
      "http://98.157.74.38/MUSIC/TYLER/Korn/Greatest%20Hits%20Vol.1/19%20Freak%20On%20A%20Leash%20%5bDante%20Ross%20Mix%5d.mp3"
  }
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
  var key = [];

  document.onkeyup = function(event) {
    if (key.includes(event.key) == false) {
      var letter = event.key.toUpperCase();
      if (band.name.indexOf(letter) == -1) {
        usersLettersGuessed.textContent = usersLettersGuessed.textContent.concat(
          letter
        );
      }
      guessesLeft--;
      usersGuessesLeft.textContent = guessesLeft;
      key.push(event.key);
    }

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
      currentImage = document.getElementById("foto");

      currentImage.setAttribute("src", band.link);
      // debugger;
      playMusic(band.musLink);

      setTimeout(function() {
        alert("YOU WIN!");
        location.reload();
      }, 100);
    }

    if (guessesLeft === 0) {
      // debugger;
      currentImage = document.getElementById("foto");
      currentImage.setAttribute("src", band.link);
      playMusic(band.musLink);

      setTimeout(function() {
        alert("YOU LOST! THE BAND NAME'S IS " + band.name);
        location.reload();
      }, 100);
    }
  };
}

function playMusic(url) {
  document.getElementById("player").src = url;
  document.getElementById("player").play();
}
window.onload = game;
