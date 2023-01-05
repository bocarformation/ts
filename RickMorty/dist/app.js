"use strict";
const personnage = document.querySelector("#personnage");
const persoArticle = document.querySelector(".single-character");
const cercle = document.querySelector(".red-circle");
const addItemsDOM = (perso) => {
    let newArticle = document.createElement("article");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let status = document.createElement("div");
    let localisation = document.createElement("div");
    let span = document.createElement("span");
    // status.classList.add("status")
    localisation.classList.add("localisation");
    newArticle.classList.add("single-character");
    img.src = `${perso.image}`;
    if (perso.status === "Alive") {
        span.classList.add("green-circle");
        console.log("Alive");
        // return span;
    }
    personnage.append(newArticle);
    status.append(span);
    newArticle.append(img, h3, status, localisation);
    h3.textContent = `${perso.name}`;
    status.textContent = `Statut: ${perso.status} - ${perso.species}`;
    localisation.textContent = `Localisation: ${perso.location.name}`;
};
fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
    // console.log(data);
    data.results.map((perso) => {
        addItemsDOM(perso);
    });
})
    .catch(error => console.log(error));
