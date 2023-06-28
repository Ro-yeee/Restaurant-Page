// Module to create Home section
export default function PopulateWithHome(){

    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createHome())
}

function createHome(){

    const home = document.createElement("div")
    home.classList.add("home")

    home.appendChild(createParagraph("Best food in the galaxy"))
    home.appendChild(createParagraph("Made with passion since 1999"))
    const img = document.createElement("img")
    img.src = "./images/chef.png"
    img.alt = "Chef"
    home.appendChild(img)
    home.appendChild(createParagraph("Order online or visit us!"))
    
    return home
}

function createParagraph(string){

    const p = document.createElement("p")
    p.textContent = string
    return p
}

