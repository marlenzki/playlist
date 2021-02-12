let songNames = ["song1", "song2", "song3", "song4", "song5"];
let artists = [];
let lengths = [];
let images = [];
let links = [];

for(let i = 0; i < songNames.length; i++){
  document.querySelector(".my-songs").append(`<li>${songNames[i]}`)
}