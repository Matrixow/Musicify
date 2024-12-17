
let menu = document.querySelector("span")
let navbar = document.querySelector("#nav")
let links = document.querySelectorAll(".nav ul a")
let header = document.querySelector("header")
let sidebar = document.querySelector(".sidebar")
let content = document.querySelector(".content")
let footer = document.querySelector(".foot")
let first = document.querySelector(".intro")
// console.log(content)


// menu.addEventListener("touchstart", resize_handler)

menu.addEventListener("click", click_handler)

window.addEventListener("resize",resize_handler)




function click_handler(event){
    event.preventDefault()
    if(menu.textContent == 'menu'){ // opening menu
        menu.textContent = 'close' //changing menu icon to the close one
        navbar.className = 'nav-responsive' // changing navbar classname to align with css
        navbar = document.querySelector(".nav-responsive") // re-assigning 
        first.style.marginTop = 190+'px'

    }

    else if(menu.textContent == 'close'){
        menu.textContent = 'menu'
        navbar.className = 'nav'
        first.style.marginTop = 60+'px'
    }

}

function resize_handler(){
    if(window.innerWidth > 600 && navbar.className == 'nav-responsive'){
        navbar.className = 'nav'
        content.style.marginTop = ''
    }

    if(window.innerWidth < 600 && navbar.className == 'nav'){
        navbar.className = 'nav-responsive'
        content.style.marginTop = 100+'px'
        menu.textContent = 'close'
    }


}


