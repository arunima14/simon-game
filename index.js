var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
nextSequence();

var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  var randomId = "#" + randomChosenColour;
  $(randomId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  // $(randomId).animate({opacity:0.5, duration:100});
}
