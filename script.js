function rollDice() {
  var bet = document.getElementById("bet").value;
  var marker = 0;
  var count = 0;
  var money = bet;
  var betArray = [bet];

if (bet <= 0) {
  alert("Your starting bet must be greater than 0.");
  document.forms["game"]["bet"].parentElement.className = "form-group has-error"
 return false;
}

while (money > 0){
  marker++;

  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = dice1 + dice2;

 if (diceTotal == 7){
   money = money + 4;
   var lastHand = betArray[betArray.length - 1];
   var newHand = lastHand + 4;
   betArray.push(newHand);
 }

else {
  money = money -1;
  var lastHand = betArray[betArray.length - 1];
  var newHand = lastHand - 1;
  betArray.push(newHand);
}
count = count++
}

highest = Math.max(...betArray);
count = betArray.indexOf(highest);
if (count < 1){
  count= 1;
}


  document.getElementById("results").style.display = "block";
  document.getElementById("startingBet").innerText = bet;
  document.getElementById("totalRolls").innerText = marker;
  document.getElementById("highAmount").innerText = highest;
  document.getElementById("rollCount").innerText = count;
  return false;
}
