// hoisting callMe returns the string 'maybe'
function callMe() {
  console.log("I just met you...");
  console.log("and this is crazy..");
  console.log("but here's my number..");
  console.log("so call me");

  var lyric = "maybe";
  return lyric;
}

// hoisting crazy prints 'hey!!!' to the console from the nested function
function crazy() {
  var thisIsCrazy = function (){
    console.log("hey!!!");
  };
  thisIsCrazy();
}


// hoisting sayMyName prints 'Kristin' to the console from the nested function
function sayMyName() {
  var name = "Cricky";

  function sayMy() {
    var name = "Kristin";
    console.log(name);
  }
  sayMy();
}
