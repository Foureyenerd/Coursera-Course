// This function is responsible for getting the visitor name

function myName() {
  var name1;
  name1 = prompt("Please enter your name");
  document.getElementById("prom").innerHTML =
    "Hello " + name1 + "! welcome to my page";
}

// This update the inner HTML to the content when first button is clicked
function updateFirst() {
  document.getElementById("stuff").innerHTML = "First Button clicked";
}

// This update the inner HTML to the content when second button is clicked
function updateSecond() {
  document.getElementById("stuff").innerHTML = "Second Button clicked";
}

// This goes back to default when the user mouse out
function unDO() {
  document.getElementById("stuff").innerHTML = "This will change.";
}
