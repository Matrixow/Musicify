let curr_playing = document.querySelector(".now-playing")
let audio_player = document.querySelector(".now-playing audio")
let music_list = document.querySelector(".music_list")
let p_text = document.getElementById("now-playing-text")

const music_data = [
    {
        name: 'Chinedum',
        artist: 'Mercy Chinwo',
        time: '4:41',
        src: "../Musicfiles/Mercy Chinwo  Chinedum Official Video.mp3"
    },

    {
        name: "Might get loud",
        artist: "Chris Brown",
        time: "4:39",
        src: "../Musicfiles/Might Get Loud Ft. Chris Brown, Brandon Lake, & Tiffany Hudson _ PraiseZion.com.mp3"
    },

    {
        name: "You dey reign",
        artist: "Mercy Chinwo",
        time: '4:27',
        src: "../Musicfiles/Mercy Chinwo  Na You Dey Reign Official Lyric Video.mp3"
    },

    {
        name: "Obinasom",
        artist: "Mercy Chinwo",
        time: "5:02",
        src: "../Musicfiles/Mercy Chinwo  Obinasom Official Video.mp3"
    }
]

music_list.addEventListener("click", play)

function add_to_list(){
    for(i=0;i<music_data.length;i++){
        let item = document.createElement("li")
        item.src = music_data[i].src
        item.textContent = music_data[i].name
        item.artist = music_data[i].artist
        music_list.appendChild(item)
    }
}


function play(event){
    if(event.target.nodeName == 'LI'){
    audio_player.src = event.target.src
    p_text.innerHTML = event.target.textContent
}

}

add_to_list()