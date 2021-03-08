function playGame(){
  var result1 = Math.floor(Math.random() * 6);
  var result2 = Math.floor(Math.random() * 6);

  if (result1 > result2){
    document.querySelector(".heading").innerHTML = "Player 1 wins!";
  }
  else if (result1 < result2){
    document.querySelector(".heading").innerHTML = "Player 2 wins!";
  }
  else if (result1 == result2){
    document.querySelector(".heading").innerHTML = "It's a draw!";
  }


  if (result1 == 0){
    document.getElementById("img1").src = "images/dice1.png";
  }
  else if (result1 == 1){
    document.getElementById("img1").src = "images/dice2.png";
  }
  else if (result1 == 2){
    document.getElementById("img1").src = "images/dice3.png";
  }
  else if (result1 == 3){
    document.getElementById("img1").src = "images/dice4.png";
  }
  else if (result1 == 4){
    document.getElementById("img1").src = "images/dice5.png";
  }
  else {
    document.getElementById("img1").src = "images/dice6.png";
  }



  if (result2 == 0){
    document.getElementById("img2").src = "images/dice1.png";
  }
  else if (result2 == 1){
    document.getElementById("img2").src = "images/dice2.png";
  }
  else if (result2 == 2){
    document.getElementById("img2").src = "images/dice3.png";
  }
  else if (result2 == 3){
    document.getElementById("img2").src = "images/dice4.png";
  }
  else if (result2 == 4){
    document.getElementById("img2").src = "images/dice5.png";
  }
  else {
    document.getElementById("img2").src = "images/dice6.png";
  }
}
