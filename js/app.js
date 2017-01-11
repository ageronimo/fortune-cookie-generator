
// list of fortunes
var fortunesList = ["You will have a great day.", "Someone will say 'hi' to you.", "You're going to trip!", "I see a chilly gust in your future."];
var i;

function generateFortuneCookie() {
  //use appendChild() method to make an list
  var li = document.createElement("li"); //creates an li node 
  var fortune = document.createTextNode(fortunesList); //creates a text node 
  li.appendChild(fortune); //appends text to li (makes li -> text), fortune becomes child
  document.getElementById("fortune-cookie-text").appendChild(li); //attaches node to list
  document.getElementById("list").appendChild(li);
  
  //showing the actual fortune
  var fortune = fortunesList[Math.floor(Math.random()*fortunesList.length)];
  document.getElementById("fortune-cookie-text").innerText = fortune;

  //target single fortunes
  var targetFortune = document.getElementById("list").getElementsByTagName("li");
  if (fortune == fortunesList[0]){
    targetFortune = fortune;
  } else if (fortune == fortunesList[1]){
    targetFortune = fortune;
  }
  console.log(targetFortune);
}