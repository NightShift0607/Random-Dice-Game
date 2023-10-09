document.querySelector("button").addEventListener("click", Start);

function Start(){
    var randomNumber1 = Math.random() * 6;
    randomNumber1 = Math.floor(randomNumber1) + 1;
    var randomDice1 = "dice" + randomNumber1 + ".png";
    var randomDiceSource1 = "images/" + randomDice1;
    document.querySelector("#dice1").setAttribute("src",randomDiceSource1);

    var randomNumber2 = Math.random() * 6;
    randomNumber2 = Math.floor(randomNumber2) + 1;
    var randomDice2 = "dice" + randomNumber2 + ".png";
    var randomDiceSource2 = "images/" + randomDice2;
    document.querySelector("#dice2").setAttribute("src",randomDiceSource2);

    var hLocation = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        hLocation.innerHTML = "Player 1 Wins!!"
    } else if (randomNumber2 > randomNumber1) {
        hLocation.innerHTML = "Player 2 Wins!!"
    } else {
        hLocation.innerHTML = "Draw!!!"
    }
}
