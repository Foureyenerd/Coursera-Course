// The function that display the alert message onload
function instructionMsg() {
  alert("Input two different number to guess the sum.");
}

// This function takes in the value of the first number
function firstInput() {
  var a = prompt("Please enter the first number!");

  document.getElementById("first").value = a;
}

// This function takes in the value of the second number
function secondInput() {
  var b = prompt("Please enter the second number!");

  document.getElementById("second").value = b;
}

// This function sum up the variable once sum up, and print different alert message on sum calculation.
function sumInput() {
  var a = document.getElementById("first").value;
  var b = document.getElementById("second").value;

  var sum = parseInt(a) + parseInt(b);

  document.getElementById("total").innerHTML =
    "The sum of the two numbers: " + sum;

  if (sum == 10) {
    alert("You guess the sum correctly!!");
  } else if (sum == 9) {
    alert("Add one more number to guess the sum correctly");
  } else if (sum == 0) {
    alert("Input something and try again.");
  } else {
    alert("You are almost there. Try and input two different number again.");
  }
}
