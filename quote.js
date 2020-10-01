//jshint esversion:6

$("button").click(function(){
  getQuote();
});
function getQuote() {
//Establish quote array
var quote = [
  "With great power, comes great responsibility.",
  "On your left.",
  "I'm Batman!",
  "You won't like me when I'm angry",
  "My Father believed death was a stepping off point",
  "I do share! I'm nice like that.",
  "You pullin'? C'mon represent!",
  "If I need a gun, I'll take one."

  ];

//Establish quote source array
  var quoteSource = [
    "- Uncle Ben/Ben Parker",
    "Steven G. Rogers",
    "Batman",
    "Dr. Bruce Banner - The Incredible Hulk, 1978",
    "Prince T'Challa of Wakonda",
    "Director Nick Fury",
    "Lt. Col. James Rhodes",
    "Agent Melinda May"
  ];

  var quoteTotal = quote.length;
//console.log(quote[quoteTotal - 1]);

//Generate a Random Number
RandomNumber = Math.floor(Math.random()*(quoteTotal));
console.log(RandomNumber);

//Change src attribute for image
document.querySelector(".img-sel").setAttribute("src", "images/image" + RandomNumber + ".jpg");

//Insert Quote into innertext of h2 based on RandomNumber
document.querySelector("h2").innerHTML = quote[RandomNumber];

//Insert Source into innerHTML of h3 based on RandomNumber
document.querySelector("h3").innerHTML = "- " + quoteSource[RandomNumber];
}
