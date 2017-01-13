
// list of fortunes
var fortunesList = ["You will have a great day.", "Someone will say 'hi' to you.", "You're going to trip!", "I see a chilly gust in your future."];
var i;
var targetFortune = [];

function generateFortuneCookie() {
  //use appendChild() method to make an list
  var li = document.createElement("li"); //creates an li node 
  var fortunes = fortunesList[Math.floor(Math.random()*fortunesList.length)];
  document.getElementById("fortune-cookie-text").innerText = fortunes;
  var fortune = document.createTextNode(fortunes); //creates a text node 
  li.appendChild(fortune);
  document.getElementById("list").appendChild(li);
  
  console.log(test);

  //target single fortunes
  targetFortune.push(fortune);
  document.getElementById("list").innerText = targetFortune;
}