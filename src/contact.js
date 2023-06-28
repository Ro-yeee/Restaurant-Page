// Module to create Contact section
export default function PopulateWithContact(){

    const main = document.getElementById("main")
    main.textContent = ""
    main.appendChild(createContact())
}

function createContact() {
    
    const contact = document.createElement("div")
    contact.classList.add("contact")

    const phoneNumber = document.createElement("p")
    phoneNumber.textContent = "☎ 944707381338"

    const address = document.createElement("p")
    address.textContent = "⛩️ 24, UB City Mall, Vittal Mallya Rd, Bengaluru"

    const location = document.createElement("img")
    location.src = "./images/location.png"
    location.alt = "Map"

    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(location)
    
    return contact
}