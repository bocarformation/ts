const personnage = document.querySelector("#personnage") as HTMLElement
const persoArticle = document.querySelector(".single-character") as HTMLElement
const cercle = document.querySelector(".red-circle") as HTMLSpanElement

interface Personnage{

    name: string,
    status: string,
    species: string, 
    image: string,
    location: {
        name: string,
        url: string
    }

}

const addItemsDOM = (perso: Personnage) =>{
    let newArticle = document.createElement("article") as HTMLElement
    let img = document.createElement("img") as HTMLImageElement
    let h3 = document.createElement("h3") as HTMLHeadingElement
    let status = document.createElement("div") as HTMLDivElement
    let localisation = document.createElement("div") as HTMLDivElement
    let span = document.createElement("span") as HTMLSpanElement

    
    
    // status.classList.add("status")
    localisation.classList.add("localisation")
    newArticle.classList.add("single-character")
    
    img.src = `${perso.image}`
    
    if(perso.status === "Alive"){
        span.classList.add("green-circle")
        console.log("Alive");
        // return span;
    }
    personnage.append(newArticle);
    status.append(span)
    newArticle.append(img, h3, status, localisation)

    h3.textContent = `${perso.name}`
    status.textContent = `Statut: ${perso.status} - ${perso.species}`
    localisation.textContent = `Localisation: ${perso.location.name}`
}


fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data =>{
    // console.log(data);

    data.results.map((perso: Personnage) => {
        addItemsDOM(perso)
    })
    
})
.catch(error => console.log(error))