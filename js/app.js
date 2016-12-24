
// list of fortunes
var fortunesList = ["You will have a great day.", "Someone will say 'hi' to you.", "You're going to trip!", "I see a chilly gust in your future."];
var i;

function generateFortuneCookie() {
  /* original code
  var node = document.createElement("LI");
  var textnode = document.createTextNode(fortunesList);
  node.appendChild(textnode);
  node.getElementById("fortune-cookie-text").appendChild(node);*/
  
  var fortune = document.getElementById(fortune-cookie-text);
  var list = document.getElementById("list");
  var li = document.createElement("li");

  fortune.innerHTML = fortunesList[Math.floor(Math.random()*fortunesList.length)];;

  li.appendChild(document.createTextNode(fortune.textContent));
  list.appendChild(li);
}