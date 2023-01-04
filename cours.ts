// 1 Types 
let id: number = 5;
let nom: string = "DUPONT";
let isAdmin: boolean = false;
let age: any = 15
let user: null 
// let admin: undefined
// En JS
let users: any[] = ["Pierre", 2, true, ["Cat"], {id: 3}]
let array: string[] = ["Pierre", "Jean"]
array.push("55")
console.log(array);

// 2 - Tuples
let salaries:[string, number, boolean] = ["Pierre", 3000, true]
let etudiants: [number, string] []  = [
    [1,"Charles"],
    [2,"Fabrice"]
]
// 3  - Union
let uid: number | string = 25;
uid = "Pierre"
// uid = true // Ca affiche une erreur à la compil, boolean n'est pas défini

// 4 - Objets 
// JS
// const modo = {
//     id: 1,
//     pseudo: "Joe"
// }

// TS  - 1ère syntaxe
// const modo: {
//     id: number,
//     pseudo: string
// } = {
//     id: 1,
//     pseudo: "Joe"
// }

// 2e syntaxe (je recommande)

type Modo = {
    id: number,
    pseudo: string
}

const  modo: Modo = {
    id: 1,
    pseudo: "John"
}

// 5 - Interfaces 
interface AdminInterface{
    id: number,
    pseudo : string
}

interface AdminInterface{
    age?: number,
}
const admin: AdminInterface = {
    id: 1,
    pseudo: "Bocs",

}


// Enums
enum Direction {
    Haut = 1 ,
    Bas,
    Gauche,
    Droite
}

Direction[0] // => Haut 
Direction.Haut // => Haut

// Assertion 

let cid;

// cid = <number>85;
// cid = <AdminInterface>

// Fonctions

function addition(x: number, y: number): number { 
    return x + y
}

console.log(addition(5,9));

// Type void
// Pas besoin de return, il est implicite
function log(message: string | number ): void{
    console.log(message);
    
}

 log("Salut")

// Generic 

//Version classique
function person(nom: string): string{
    return nom
}

person("DUPONT")
person)


// Generics
function person2<T>(nom: T[]): T[]{
    return nom
}

person2([3,"fjf "])
person2([1,2,3,4,5])

const dupont = person2<AdminInterface>([{id: 2, pseudo: "Bocs"}])


// EXERCICE RICK & MORTY
"https://rickandmortyapi.com/api/character"