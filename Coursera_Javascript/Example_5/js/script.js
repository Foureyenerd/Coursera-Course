var movie = ["Glengarry", " The Aviator", " Wolf of wall street"];

function loadMovie() {
  document.getElementById("movie").innerHTML = movie;
}

function addMovie() {
  var new_movie = prompt("Please enter your favorite movie!");
  movie[movie.length] = [" " + new_movie];
  document.getElementById("movie").innerHTML = movie;
}
