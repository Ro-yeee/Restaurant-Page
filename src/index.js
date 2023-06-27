import PopulateWithHome from "./home"

PopulateWebsite()

function PopulateWebsite(){

    const content = document.getElementById("content")
    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())

    PopulateWithHome()
}

function createHeader(){

    const header = document.createElement("header")
    const title = document.createElement('h1')
    title.textContent ="Ratatouille"
    header.appendChild(title)
    return header
}

function createMain(){

    const main = document.createElement("main")
    const div = document.createElement('div')
    div.setAttribute("id","main")
    main.appendChild(div)
    return main
}

function createFooter(){
    
    const footer = document.createElement("footer")
    const footerContent = document.createElement("p")
    footerContent.textContent = "Roy Joseph © 2023"
    footer.appendChild(footerContent)
    return footer
}