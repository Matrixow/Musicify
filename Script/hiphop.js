let hiphopInfo = document.querySelector(".hiphop-info")
let mList = document.querySelector(".music_list")
let player = document.querySelector(".now-playing")
let curr_playing = document.querySelector(".now-playing audio")
let playerText = document.querySelector("#now-playing-text")
let list = [mList, player]


function read(){
    if(hiphopInfo.style.visibility == 'hidden'){
        hiphopInfo.style.visibility = 'visible'
        document.getElementById("read").textContent = 'Close reader'
    }
    else{
        hiphopInfo.style.visibility = 'hidden'
        document.getElementById("read").textContent = 'Read more about Hiphop'
    }
}


function listen(){
    for(item of list){
        if(item.style.visibility == 'hidden'){
            item.style.visibility = 'visible'
        }
        else{
            item.style.visibility = 'hidden'
        }
    }
}

const music_data = [
    {
        name: "Sprinter",
        artist: "Central Cee ft Dave",
        time: "3:49",
        src: "../Musicfiles/Central Cee x Dave  Sprinter Music Video.mp3",
    },

    {
        name: "London Scammer",
        artist: "Tankz",
        time: "3:25",
        src: "../Musicfiles/Tankz  London Scammer Music Video.mp3",
    },

    {
        name: "Don't matter",
        artist: "Akon",
        time: "4:04",
        src: "../Musicfiles/Akon  Dont Matter Official Music Video.mp3",
    },

    {
        name: "Highs and Lows",
        artist: "Prinz Gabriella",
        time: "2:17",
        src: "../Musicfiles/Prinz Gabriela Bee  Highs  Lows Official Video.mp3",
    },

    {
        name: "Mustard - Ballin",
        artist: "Roddy Rich",
        time: "3:00",
        src: "../Musicfiles/Mustard_-_Ballin_(Lyrics)_ft._Roddy_Ricch(256k).mp3",
    },

    {
        name: "Impossible",
        artist: "Unknown",
        time: "6:56",
        src: "../Musicfiles/Impossible.mp3"
    }

]

function add_to_list(){  // adding our music items to the list from the music data
    for(i=0;i<music_data.length;i++){
        let child = document.createElement("li")
        child.textContent = music_data[i].name
        child.src = music_data[i].src
        child.artist = music_data[i].artist
        mList.appendChild(child)
    }
}

function play_music(event){ // as the name implies, it's a function to play the music
    event.preventDefault()
    if(event.target.nodeName == 'LI'){
        let src = event.target.src
        curr_playing.src = src
        playerText.innerHTML = event.target.textContent
    }

}

add_to_list()

mList.addEventListener("click", play_music)