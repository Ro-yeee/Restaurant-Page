export default function PopulateWithMenu(){

    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createMenu())
}

function createMenu(){

    const menu = document.createElement("div")
    menu.classList.add("menu")

    const menuItem = document.createElement("div")
    menuItem.classList.add("menuItem")

    const itemCard = document.createElement("div")
    itemCard.classList.add("itemCard")

    const picture = document.createElement("img")
    picture.src = "./images/Foods/1.jpeg"

    const name = document.createElement("p")
    name.textContent = "Falafel Mac & Cheese"

    itemCard.appendChild(picture)
    itemCard.appendChild(name)

    const price = document.createElement("h2")
    price.classList.add("itemPrice")
    price.textContent = "₹ 249"

    menuItem.appendChild(itemCard)
    menuItem.appendChild(price)

    menu.appendChild(menuItem)

    return menu
}