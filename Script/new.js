let menu = document.querySelector(".nav ul span")
let nav = document.querySelector(".nav")
let innerWidht = document.documentElement.clientWidth


document.addEventListener("resize", resize_handler)

function resize_handler(event){
    if(event.scrollWidth <=600){
        console.log(event.innerWidht)
        nav.className += 'responsive'
    }
}

menu.addEventListener("click", resize_handler) // use click event for non-touch devices


// a handler to execute tasks when the menu button is clicked
function resize_handler(event){
    // changing the menu icon depending on when open or not
    if(menu.textContent == "menu"){
        // menu closed // opening it 
        menu.textContent = "close"
        event.preventDefault()
        content.style.marginTop = 190 +'px'
        
        // displaying the links
        links.forEach(function(link){
            link.style.visibility = 'visible'
            link.style.display = "block"
            
        })
    }
    else{
        // menu opened // closing it
        event.preventDefault()
        menu.textContent = "menu"
        content.style.marginTop = ''


        links.forEach(function(link){
            link.style.visibility = 'hidden'
            link.style.display = ''
        })
    }


    //checking whether navbar open or close
    if(navbar.style.height != ''){
        navbar.style.height = ''

    }
    else{
        navbar.style.height = "auto"
    }

    //showing nav-items


}