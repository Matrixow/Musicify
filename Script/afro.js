let list_item = document.querySelectorAll('.music_list li')  // the music list 
let curr_playing_text = document.querySelector("#now-playing-text") // the name of the currently playing music
let curr_playing = document.querySelector(".now-playing audio")  // the music currently playing
let m_list = document.querySelector(".music_list")


m_list.addEventListener("click", play_music)


const music_data = [
    {
        name: 'Into the future',
        artist: 'Stonebwoy',
        time: '2:29',
        src: "../Musicfiles/Stonebwoy-Into-The-Future.mp3"
    },

    {
        name: 'Try me',
        artist: 'Sarkodie',
        time: '3:53',
        src: "../Musicfiles/Sarkodie  Try Me Lyrics.mp3"

    },

    {
        name: 'Dior',
        artist: "Ruger",
        time: "3:40",
        src: "../Musicfiles/Dior __ TrendyBeatz.com.mp3"
    },

    {
        name: 'Running',
        artist: 'Lasmid',
        time: '2:53',
        src: "../Musicfiles/Lasmid Running DownGh.com.mp3"
    },

    {
        name: 'Commando',
        artist: 'King Promise',
        time: '2:46',
        src: "../Musicfiles/King Promise  Commando Official Video.mp3"
    },

    {
        name: "Obaa Hemaa",
        artist: "Jay Bhad",
        time:'3:04',
        src: '../Musicfiles/01 Obaa Hemaa Ft. O_Kenneth, Reggie, Beeztrap KOTM, Kwaku DMC & Jay Bahd.mp3'
    },

    {
        name: "Kwaku Ananse",
        artist : "Amerado",
        time: '4:00',
        src : "../Musicfiles/Amerado  Kwaku Ananse Official Video.mp3"
    },

    {
        name: 'Transformer',
        artist: "Akwaboah",
        time: '4:01',
        src: "../Musicfiles/Transformer_Akwaboah.mp3"
    }

]


function add_to_list(){  // adding our music items to the list from the music data
    for(i=0;i<music_data.length;i++){
        let child = document.createElement("li")
        child.textContent = music_data[i].name
        child.src = music_data[i].src
        child.artist = music_data[i].artist
        m_list.appendChild(child)
    }
}

function play_music(event){ // as the name implies, it's a function to play the music
    event.preventDefault()
    if(event.target.nodeName == 'LI'){
        let src = event.target.src
        curr_playing.src = src
        curr_playing_text.innerHTML = event.target.textContent
    }


}

function to_milsecs(time){ // a function to convert the music time to milliseconds
    let secs = time.split(":")
    let music_secs = 0
    let list = []
    for( i of secs){
        if(i == secs[0]){
            list.push(parseInt(i)*60)
        }
        else{
            list.push(parseInt(i))
        }
        
    };
    
    for(i of list){
        music_secs += i
    }

    return music_secs * 1000
}

function play_all(){ // playing all
    let current_index = 0
    function play_next(){
        if(current_index < music_data.length){
            curr_playing.src = music_data[current_index].src
            curr_playing_text.innerHTML = music_data[current_index].name
            setTimeout(play_next, to_milsecs(music_data[current_index].time));
            current_index++
        }
    }

    play_next()
}



add_to_list()
