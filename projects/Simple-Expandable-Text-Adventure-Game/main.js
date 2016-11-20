document.getElementById("cbox")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      runCommand(document.getElementById('cbox').value);
      document.getElementById('cbox').value = ""
    }
});

var scene = 0;
var Player = {
  light: false,
  hasKey: false,
  hasMatches: false
}
function runCommand(value) {
arr = value.toLowerCase().split(' ')
if (arr.length < 2) {l6.innerHTML = "Not Enough Arguments"} else if (arr.length > 2) { l6.innerHTML = "Too Many Arguments" }
else {
  l1.innerHTML ="";l2.innerHTML ="";l3.innerHTML ="";l4.innerHTML ="";l5.innerHTML ="";l6.innerHTML ="";l7.innerHTML ="What will you do next?";
  switch(arr[0]) {
    case "grab":
      switch(arr[1]){
        case "matches":
          if (Player.hasMatches === false) {
          Player.hasMatches = true;
          l1.innerHTML = "You grabbed a box of matches."
          } else { l1.innerHTML = "You already have the box of matches" }
          break;
        case "key":
          if(Player.light === true) {l1.innerHTML = "You grabbed a key from the wall."; Player.hasKey = true;}
          else {l1.innerHTML = "No key can be seen."}; break;
        default: l6.innerHTML = "Unable to grab " + arr[1]; break;
      };break;
    case "look":
      switch(arr[1]) {
        case "north":
          l1.innerHTML = "You see a large wooden door that appears to be locked by some kind of mechanism";
          l2.innerHTML = "Next to the door on the right you see a small table with a unlit lantern on it.";
          break;
        case "south":
          l1.innerHTML = "You see a small bed that you woke up in."
          if(Player.hasMatches === false) {l2.innerHTML = "On the floor you see a small box of matches next to the bed";}
          break;
        case "east":
          l1.innerHTML = "You see a solid stone brick wall.";
          break;
        case "west":
          l1.innerHTML = "You see a solid stone brick wall.";
          if (Player.light === true && Player.hasKey === false) {l2.innerHTML = "The light reflects off a key wedged into the stone."}
          break;
        default: l6.innerHTML = arr[1] + " is not a direction."
      };
      break;
    case "open":
      switch(arr[1]) {
        case "door":
          if (Player.hasKey === true){l1.innerHTML = "You opened the door, and escaped the room!";}
          else {l1.innerHTML = "The door is locked it needs a key to open.";}
          break;
        default: l6.innerHTML = "Unable to open " + arr[1];
      };break;
    case "interact":
      switch(arr[1]){
        case "lantern":
          if (Player.hasMatches === true && Player.light === false) {
            Player.light = true;
            l1.innerHTML = "You lit the lantern, the room is now fully lit.";
          } else if(Player.hasMatches === false){l1.innerHTML = "You need matches in order to light this lantern."}
          else {l1.innerHTML = "The lantern is already lit."};
        break;
        default: l6.innerHTML = "Unable to interact with " + arr[1];
      }
      break;

    default: l6.innerHTML ='Command: "' + arr[0] + '" was not recognized. Please try again.'; break;
    }
  }
}

var l1 = document.getElementById('scl1');
var l2 = document.getElementById('scl2');
var l3 = document.getElementById('scl3');
var l4 = document.getElementById('scl4');
var l5 = document.getElementById('scl5');
var l6 = document.getElementById('scl6');
var l7 = document.getElementById('scl7');

function open() {
if (scene !== 1) {
  l1.innerHTML = "You wake up in a strange dimly lit room."
  l3.innerHTML = "Command list: "
  l4.innerHTML = "grab: try to pickup item"
  l5.innerHTML = "look (north,east,south,west): look in that direction"
  l6.innerHTML = "open (object): attempt to open object"
  l7.innerHTML = "interact (object): interact with object"

  }
}

open();
