var songs = [];

// add song objects to songs array
songs.push({title:"Clinch Mountain Backstep", artist: "Ralph Stanley", album: "Best of the Best"});
songs.push({title:"Shady Grove", artist: "The Ebony Hillbillies", album: "Barefoot and Flying"});
songs.push({title:"Caught in the Crossfire", artist: "Rhonda Vincent", album: "One Step Ahead"});
console.log(songs); // confirm they're in the array

// {Song name} by {Artist} on the album {Album}
var song1Title = document.getElementById("song1-title");
song1Title.innerHTML = songs[0].title;
var song1Artist = document.getElementById("song1-artist");
song1Artist.innerHTML = songs[0].artist;
var song1Album = document.getElementById("song1-album");
song1Album.innerHTML = songs[0].album;

var song2Title = document.getElementById("song2-title");
song2Title.innerHTML = songs[1].title;
var song2Artist = document.getElementById("song2-artist");
song2Artist.innerHTML = songs[1].artist;
var song2Album = document.getElementById("song2-album");
song2Album.innerHTML = songs[1].album;

var song3Title = document.getElementById("song3-title");
song3Title.innerHTML = songs[2].title;
var song3Artist = document.getElementById("song3-artist");
song3Artist.innerHTML = songs[2].artist;
var song3Album = document.getElementById("song3-album");
song3Album.innerHTML = songs[2].album;
