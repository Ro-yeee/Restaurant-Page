// Module to create Menu section
export default function PopulateWithMenu(){

    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createMenu())
}

function createMenu(){

    const menu = document.createElement("div")
    menu.classList.add("menu")

    menu.appendChild(createItem("Falafel Mac & Cheese","249",1))
    menu.appendChild(createItem("Chicken Mac & Cheese","279",2))
    menu.appendChild(createItem("Paneer Mac & Cheese","260",3))
    menu.appendChild(createItem("Butter Chicken Pasta","349",4))
    menu.appendChild(createItem("Corn & Pepper Lasagne","275",5))
    menu.appendChild(createItem("Paneer Tikka Lasagne","278",6))
    menu.appendChild(createItem("Meaty Meatball Lasagne","299",7))
    menu.appendChild(createItem("Bombay Masala Quesadilla","269",8))
    menu.appendChild(createItem("Margherita Pizza (Medium)","329",9))
    menu.appendChild(createItem("Chicken Tikka Pizza (Medium)","499",10))
    menu.appendChild(createItem("Box Of 6 Ring Donuts ","390",11))
    menu.appendChild(createItem("New York Cheesecake","388",12))
    
    return menu
}

function createItem(itemName,itemPrice,location){

    // menu item will contain the item card along with its price
    const menuItem = document.createElement("div")
    menuItem.classList.add("menuItem")

    // Item Card will contain the picture and item name
    const itemCard = document.createElement("div")
    itemCard.classList.add("itemCard")

    const picture = document.createElement("img")
    picture.src = `./images/Foods/${location}.jpeg`
    picture.alt = itemName
    const name = document.createElement("p")
    name.textContent = itemName
    itemCard.appendChild(picture)
    itemCard.appendChild(name)

    const price = document.createElement("h2")
    price.classList.add("itemPrice")
    price.textContent = `₹${itemPrice}`

    menuItem.appendChild(itemCard)
    menuItem.appendChild(price)

    return menuItem

}