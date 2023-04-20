// Generates a random number from 1 to 6 for replacing Dice 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


// Generates a random number from 1 to 6 for replacing Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);  


// If player number 1 is the winner
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} 
else 
// If player number 2 is the winner
if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
// If dice 1 is equal to dice 2
else {
    document.querySelector("h1").textContent = "Drawn!";
}