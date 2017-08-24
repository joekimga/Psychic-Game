//Psychic Game

/*
var str = "abcdefghijklmnopqrstuvwxyz";

var alphaArray = str.split("");

if {

}
*/

<!DOCTYPE html>
<html>
<head>
    <title>The Psychic Game</title>
</head>
<body>
<script type="text/javascript">

var wins = 0;
var losses = 0;
var guesses = "9"


document.onkeyup = function(event) {
        var userGuess = event.key;

        console.log(userGuess.toLowerCase());

        var computerGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var computerGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];
         
        console.log(computerGuess);
    
       if (userGuess === computerGuess) {
          wins++;
        } else if (userGuess !== computerGuess) {
          losses++;
        }

       console.log(wins);
        console.log(losses);

      /* var html =
          "<p>Wins: " + userGuess + "</p>" +
          "<p>Losses: " + computerGuess + "</p>" +
          "<p>Guesses Left: " + wins + "</p>" +
          "<p>Your guesses so far: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";*/


var computerGuess = choices[Math.floor(Math.random() * choices.length)];





   };





//wins, if computerGuess = userGuess
//losses if computrGuess = userGuess
//var wins = 0;    var losses = 0;
//guesses left var guessesLeft = 0;
// your guesses 
    











</script>

</body>
</html>
