/*
function evenBinary(n) {
  arr = n.split(" ");
  var digit = arr.map(function(x) {return parseInt(x, 2)},0)
  var even = digit.filter(elem => elem % 2 === 0).sort((a, b) => a - b);
  var sorted = digit.map(elem => elem % 2 !== 0 ? elem : even.shift());
  var BinarySorted = sorted.map(function(x) {x = x.toString(2);if(x.length < 2) {x = "00" + x}else if (x.length < 3) {x = "0" + x};return x});
  return BinarySorted.join(" ");
}

function eB(s) {
  var arr = s.split(" ");
  var digit = arr.map(function(x) {return parseInt(x, 2)},0)
  var even = digit.filter(elem => elem % 2 === 0).sort((a, b) => a - b);
  var sorted = digit.map(elem => elem % 2 !== 0 ? elem : even.shift());
  var BinarySorted = sorted.map(function(x) {x = x.toString(2);if(x.length < 2) {x = "00" + x}else if (x.length < 3) {x = "0" + x};return x});
  return BinarySorted.join(" ");
}

var x;
function random(n) {
nums = [];
for (var i = 0; i < n; i++) {
	nums[i] = Math.floor(Math.random()*(7-1+1)+1);
	}
   x = nums.map(function(x){ x = x.toString(2); return x.length < 3 ? '0'.repeat(3-x.length) + x : x}).join(" ")
  return x
}

function ifEquals() {
  if (evenBinary(random(25)) === eB(x)) {return true}
}
a = 10
b = 20
a = b

console.log(a +" "+ b);




/*
for (var i = 0; i < arr.length; i++) {"0" + arr[i].toString(8)}
var digit = n.map(function(x){parseInt(x, 2)});
var odd = n.filter(elem => elem % 2 === 0).sort((a, b) => a - b);
var sorted = n.map(elem => elem % 2 !== 0 ? elem : odd.shift());
var test = 1
Test.expect(websites.length > 0, 'The array is still empty')
Test.expect(websites.length == 1, 'The array contains too many values')
Test.expect(websites[0] == 'codewars', 'The array does not contain the correct value "codewars"')
*/



// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
    };

    result = lookup[val];
  }

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
