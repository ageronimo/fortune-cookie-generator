
// list of fortunes
var fortunesList = ["You will have a great day.", "Someone will say 'hi' to you.", "You're going to trip!", "I see a chilly gust in your future."];
var i;

function generateFortuneCookie() {
  //use appendChild() method to make an list
  var li = document.createElement("li"); //creates an li node 
  var fortune = document.createTextNode(fortunesList); //creates a text node 
  li.appendChild(fortune); //appends text to li (makes li -> text), fortune becomes child
  document.getElementById("fortune-cookie-text").appendChild(li); //attaches node to list

  //showing the actual fortune
  var li = fortunesList[Math.floor(Math.random()*fortunesList.length)];
  document.getElementById("fortune-cookie-text").innerHTML = li;

  //show all fortunes in previous-fortunes
  document.getElementById("previous-fortunes").innerHTML = li;
}

  // for (i = 0; i < fortunesList.length; i++) {
  //   document.getElementById("fortune-cookie-text").innerHTML = fortunesList[i];
  //   console.log(fortunesList[i]);
  // }

  // var box = document.getElementById('fortune-cookie-text');
  //  -  var list = document.getElementById('list');
  //  -  var li = document.createElement("li");
  //  -  box.innerHTML = fortunesList[Math.floor(Math.random()*fortunesList.length)];
  //  -  li.appendChild(document.createTextNode(box.textContent));
  //  -  list.appendChild(li);

  // var node = document.createElement("LI");
  // var textnode = document.createTextNode("Water");
  // node.appendChild(textnode);
  // document.getElementById("myList").appendChild(node);