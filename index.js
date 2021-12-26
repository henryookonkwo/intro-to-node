// Using internal native nodeJS module

// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file4.txt");

const superheroes = require('superheroes');
const supervillains = require('supervillains');

let mySuperheroName = superheroes.random();
console.log("mySuperheroName " + mySuperheroName);

// let allSuperheroNames = superheroes.all;
// console.log(allSuperheroNames.length + " namelist" + allSuperheroNames);

// let allSupervillainsNames = supervillains.all;
// console.log(allSupervillainsNames.length + " Names of all villans: " + allSupervillainsNames);

let mySupervillains = supervillains.random();
console.log("mySupervillains: " + mySupervillains);
