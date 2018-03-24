//Psychic Game

/*
var str = "abcdefghijklmnopqrstuvwxyz";

var alphaArray = str.split("");

if {

}
*/

alert("You have 9 guesses.");

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/* redundant
var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
*/

var wins = 0;
var losses = 0;
var guesses = "9"




document.onkeyup = function(event) {
        var userGuess = event.key



        console.log(userGuess.toLowerCase());

        var computerGuess = [];

        //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
         
        console.log(computerGuess);
    
       if (userGuess === computerGuess) {
          wins++;
        } 

        else if (userGuess !== computerGuess) {
          losses++;
        }



       console.log(wins);
       console.log(losses);





//getElement.id

      var html =
          "<p>Wins: " + userGuess + "</p>" +
          "<p>Losses: " + computerGuess + "</p>" +
          "<p>Guesses Left: " + wins + "</p>" +
          "<p>Your guesses so far: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";


var computerGuess = choices[Math.floor(Math.random() * choices.length)];

   };
//put's it to the DOM
//document.querySelector(.winsLosses);

//wins, if computerGuess = userGuess
//losses if computrGuess = userGuess
//var wins = 0;    var losses = 0;
//guesses left var guessesLeft = 0;
// your guesses 
    



