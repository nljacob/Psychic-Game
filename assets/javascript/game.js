var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesleft = 10; 
var computerchoice = alphabet[Math.floor(Math.random() * alphabet.length)];
var array = [];

document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessesleft").innerHTML = "Guesses Left: " + guessesleft;
document.getElementById("userguess").innerHTML = "Your Guesses So Far: ";

document.onkeypress = function(event) {

var userguess = event.key;
array.push(userguess)

if(userguess === computerchoice){
    wins++;
    array = [];
}

else{
    guessesleft --;
    }

if(guessesleft === 0){
    losses++;
    guessesleft = 10;
    array = [];
}

document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessesleft").innerHTML = "Guesses Left: " + guessesleft;
document.getElementById("userguess").innerHTML = "Your Guesses So Far: " + array.toString();
}