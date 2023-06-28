// Importing moudels for populating each section
import PopulateWithHome from "./home"
import PopulateWithContact from "./contact"
import PopulateWithMenu from "./menu"

// Populating the website for the first time
PopulateWebsite()

function PopulateWebsite(){

    const content = document.getElementById("content")
    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())

    const hme = document.getElementById("homeBtn")
    hme.classList.add("btnActive")
    PopulateWithHome()

}

// Function to create Header
function createHeader(){

    const header = document.createElement("header")
    const title = document.createElement('h1')
    title.textContent ="Ratatouille"
    header.appendChild(title)
    header.appendChild(createNav())
    return header
}

// Creating navbar with buttons and adding event listners
function createNav(){

    const navBar = document.createElement("nav")

    const homeBtn = document.createElement("button")
    homeBtn.textContent = "Home"
    homeBtn.setAttribute("id","homeBtn")
   
    const menuBtn = document.createElement("button")
    menuBtn.textContent = "Menu"
    menuBtn.setAttribute("id","menuBtn")
   
    const contactBtn = document.createElement("button")
    contactBtn.textContent = "Contact"
    contactBtn.setAttribute("id","contactBtn")

    navBar.appendChild(homeBtn)
    navBar.appendChild(menuBtn)
    navBar.appendChild(contactBtn)

    homeBtn.onclick = () =>{
        if(homeBtn.classList.contains("btnActive")) return
        homeBtn.classList.add("btnActive")
        menuBtn.classList.remove("btnActive")
        contactBtn.classList.remove("btnActive")
        PopulateWithHome()
    }

    menuBtn.onclick = () =>{
        if(menuBtn.classList.contains("btnActive")) return
        menuBtn.classList.add("btnActive")
        homeBtn.classList.remove("btnActive")
        contactBtn.classList.remove("btnActive")
        PopulateWithMenu()
    }

    contactBtn.onclick = () =>{
        if(contactBtn.classList.contains("btnActive")) return
        contactBtn.classList.add("btnActive")
        homeBtn.classList.remove("btnActive")
        menuBtn.classList.remove("btnActive")
        PopulateWithContact()
    }

    return navBar
}

// Function to create Main section . Other elemets will be populated inside of main
function createMain(){

    const main = document.createElement("main")
    const div = document.createElement('div')
    div.setAttribute("id","main")
    main.appendChild(div)
    return main
}

// Function to create Footer
function createFooter(){

    const footer = document.createElement("footer")
    const footerContent = document.createElement("p")
    footerContent.textContent = `Roy Joseph © ${new Date().getFullYear()}`
    footer.appendChild(footerContent)
    return footer
}

