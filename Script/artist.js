let artists = document.querySelector(".artist_cont") // aritist container in the document
let bio = document.querySelector(".bio #biography")


const artist_data = [  // data about each artist which is used in building the page
    {
        name: 'Sarkodie', 
        img : '../Img/sarkcess.jpeg',
        bio: "Michael Owusu Addo (born 10 July 1988)[2] known professionally as Sarkodie, is a Ghanaian rapper, songwriter, and entrepreneur from Tema.[3] He started rapping at a young age and has since become a household name in the Ghanaian and Global music industry. His contributions to the Ghanaian music industry have earned him numerous accolades, including the Vodafone Ghana Music Award (VGMA) for 'Artiste of the Decade'.[4] He was announced the first winner of BET's Best International Flow Artist at the 2019 BET Hip Hop Awards.[5] He is also considered one of the major proponents of the Azonto genre and dance and one of the most successful African rappers of all time. Due to the variety of musical genres he can perform in, Sarkodie is referred to as a 'multifaceted rapper' and frequently raps in his native language, Twi.[2]"
    },
    {
        name: 'Stonebwoy',
        img: '../Img/bhim.jpeg',
        bio: "Livingstone Etse Satekla (born 5 March 1988), better known by his stage name Stonebwoy, is a Ghanaian Afropop, dancehall and reggae musician.[2]He is the CEO of Burniton Music Group. He won the Best International Act: Africa category at the 2015 BET Awards and Artist of the Year at the 2015 Ghana Music Awards.[3] He is also a recipient of two Billboard plaques.[4] Stonebwoy received the Golden Club plaque from Boomplay after surpassing 100 million streams on the platform. He has been described as the king of reggae and dance hall in Africa.[5][6][7] Stonebwoy is also an actor, having appeared in the movies Happy Death Day and My name is Ramadan.[8] He is a global ambassador for sanitation.[9][10] In September 2019, he was made the brand ambassador for Voltic Natural Mineral Water.[11] He is the brand ambassador of Tecno mobile in Ghana.[12][13] In 2022, he signed unto Universal Music Group’s Def Jam Recordings, and it's flagship Def Jam Recordings Africa.[14] He’s poised to make three albums under the label.[1]"
    },

    {
        name: 'Adina',
        img : '../Img/adina.jpeg',
        bio: "Adina Thembi Ndamse (born 1989)[2] better known by her stage name Adina is a Ghanaian-South African singer, songwriter, actress and sometimes a model. She was the winner of music reality show Stars of the Future in 2008.[3] Her eighth music single titled 'Too Late' won her two awards. Record of the Year and Best Female Vocalist of the Year at the 2018 Vodafone Ghana Music Awards in Ghana.[4] In March 2021, she was among the Top 30 Most Influential Women in Music by the 3Music Awards Women's Brunch.[5]"
    },
    {
        name: 'Kidi',
        img: "../Img/kidi.jpeg",
        bio: "Dennis Nana Dwamena, widely recognized by his stage name 'KiDi,' which translates to 'Rhythm,' was born on August 18, 1993. He is a prominent Ghanaian singer-songwriter known for his contributions to the genres of afrobeats and high-life. KiDi is affiliated with Lynx Entertainment, and he has garnered international acclaim, particularly for his chart-topping single 'Touch It.' Notably, the remix of this track features the renowned American rapper Tyga, and it has achieved widespread streaming success across the globe."
    },
    {
        name: 'Gyakie',
        img: '../Img/gyakie.jpeg',
        bio: "Jackline Acheampong[1] (born 16 December 1999), known professionally as Gyakie, aka Song Bird is a Ghanaian R&B and afro-fusion singer.[2][1][3] In 2019, Gyakie released her first single titled 'Love is Pretty', which paved the way for another single, 'Never Like This'. In August 2020, the 'Forever' song from her five-track EP 'Seed' was her claim to fame, enjoying airplay and leading charts in Ghana, Kenya and Nigeria. Gyakie's father is Nana Acheampong.[1][2][3][4]"
    }
]

let list = []
function create_conts(){
    for(let i=0; i<artist_data.length;i++){
        let cont = document.createElement("div")
        cont.className = 'artist_individual_cont'
        let img = document.createElement("img")
        img.className = 'artistImage'
        img.src = artist_data[i].img
        let para = document.createElement("p")
        para.textContent = `Name: ${artist_data[i].name}`
        cont.appendChild(img);cont.appendChild(para)
        artists.appendChild(cont)
        list.push(cont)
    
    }
}
create_conts()

let container = document.querySelectorAll(".artist_individual_cont")

// function show_slides(){
    
// }

let currentIndex = 0
bio.innerHTML = artist_data[currentIndex].bio
function left(){
    container[currentIndex].style.display = 'none'
    if(currentIndex == 0){
        currentIndex = container.length - 1
    }

    else{
    currentIndex--
    }

    container[currentIndex].style.display = 'block'
    bio.innerHTML = artist_data[currentIndex].bio
}

function right(){
    container[currentIndex].style.display = 'none'
    if(currentIndex >= container.length - 1){
        currentIndex = 0
    }
    else if(currentIndex <container.lenght - 1){
        currentIndex ++
    }

    else{
    currentIndex ++
    }

    container[currentIndex].style.display = 'block'
    bio.innerHTML = artist_data[currentIndex].bio
}









