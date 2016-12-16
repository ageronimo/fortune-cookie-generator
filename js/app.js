
// list of fortunes
var fortunesList = ["You will have a great day.", "Someone will say 'hi' to you.", "You're going to trip!", "I see a chilly gust in your future."];
var i;

function generateFortuneCookie() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(fortunesList);
  node.appendChild(textnode);
  node.getElementById("fortune-cookie-text").appendChild(node);

  for (i = 0; i < fortunesList.length; i++) {
    console.log
  }

}