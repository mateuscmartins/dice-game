function rollDice(){

    initialConditions();

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
    document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

    if(randomNumber1 > randomNumber2){
        document.querySelector("#player1").textContent = "WINNER !!!"
        document.getElementById("player1").style.color  = "red"
    }else if(randomNumber2 > randomNumber1){
        document.querySelector("#player2").textContent = "WINNER !!!"
        document.getElementById("player2").style.color  = "red"
    }else{
        document.querySelector("#player1").textContent = "DRAW !!!"
        document.querySelector("#player2").textContent = "DRAW !!!"
    }
};

function initialConditions(){
    document.querySelector("#player1").textContent = "Player 1"
    document.querySelector("#player2").textContent = "Player 2"

    document.getElementById("player1").style.color  = "#222831"
    document.getElementById("player2").style.color  = "#222831"
};