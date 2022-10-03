//jshint esversion:6

// const fs = require("fs");
// fs.copyFileSync("file1.txt", "file2.txt"); \Internal nodejs package

var superheroes = require("superheroes");
var supervillains = require("supervillains");
var mysuperheroName = superheroes.random();
var myVillain = supervillains.random();

console.log(mysuperheroName);
console.log(myVillain);
