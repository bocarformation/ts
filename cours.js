"use strict";
// 1 Types 
let id = 5;
let nom = "DUPONT";
let isAdmin = false;
let age = 15;
let user;
// let admin: undefined
// En JS
let users = ["Pierre", 2, true, ["Cat"], { id: 3 }];
let array = ["Pierre", "Jean"];
array.push("55");
console.log(array);
// 2 - Tuples
let salaries = ["Pierre", 3000, true];
let etudiants = [
    [1, "Charles"],
    [2, "Fabrice"]
];
// 3  - Union
let uid = 25;
uid = "Pierre";
const modo = {
    id: 1,
    pseudo: "John"
};
const admin = {
    id: 1,
    pseudo: "Bocs",
};
// Enums
var Direction;
(function (Direction) {
    Direction[Direction["Haut"] = 1] = "Haut";
    Direction[Direction["Bas"] = 2] = "Bas";
    Direction[Direction["Gauche"] = 3] = "Gauche";
    Direction[Direction["Droite"] = 4] = "Droite";
})(Direction || (Direction = {}));
Direction[0]; // => Haut 
Direction.Haut; // => Haut
// Assertion 
let cid;
// cid = <number>85;
// cid = <AdminInterface>
// Fonctions
function addition(x, y) {
    return x + y;
}
console.log(addition(5, 9));
// Type void
// Pas besoin de return, il est implicite
function log(message) {
    console.log(message);
}
log("Salut");
// Generic 
//Version classique
function person(nom) {
    return nom;
}
person("DUPONT");
person;
// Generics
function person2(nom) {
    return nom;
}
person2([3, "fjf "]);
person2([1, 2, 3, 4, 5]);
const dupont = person2([{ id: 2, pseudo: "Bocs" }]);
// EXERCICE RICK & MORTY
"https://rickandmortyapi.com/api/character";
