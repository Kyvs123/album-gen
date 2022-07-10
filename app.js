//local data
const albums = [
    {
    id: 1,
    name: "Madvillainy",
    artist: "MF DOOM + Madlib",
    img: "./img/madvillainy.jpeg",
    text: "Madvillainy is the only studio album by American hip hop duo Madvillain, consisting of rapper MF Doom and producer Madlib. It was released on March 23, 2004, on Stones Throw Records. read more..."
},
    {
        id: 2,
        name: "To Pimp A Butterfly",
        artist: "Kendrick Lamar",
        img: "./img/tpab.jpg",
        text: '"To Pimp a Butterfly" é o terceiro álbum de estúdio do rapper estadunidense Kendrick Lamar.O álbum foi lançado em 15 de março de 2015, pelas editoras discográficas Top Dawg Entertainment, Aftermath Entertainment, e distribuído pela Interscope Records. read more...'
},
    {
        id: 3,
        name: "It Is What It Is",
        artist: "Thundercat",
        img: "./img/iiwii.jpg",
        text: 'It Is What It Is is the fourth studio album by American musician Thundercat, released through Brainfeeder on April 3, 2020.'
    },
    {
        id: 4,
        name: "Below The Heavens",
        artist: "Blu",
        img: "./img/bth.png",
        text: "Below the Heavens is the debut studio album by American hip hop duo Blu & Exile. It was released by Sound in Color on July 17, 2007. It serves as Blu's debut album, while Exile had previously released his solo album Dirty Science and two albums as a member of the duo Emanon."
    },
    {
        id: 5,
        name: "Doja Cat",
        artist: "Panet Her",
        img: "./img/ph.png",
        text: 'Planet Her é o terceiro álbum de estúdio da rapper e cantora estadunidense Doja Cat, lançado em 25 de junho de 2021, através da Kemosabe e RCA Records. O álbum foi produzido executivamente pela própria rapper ao lado do produtor frequente Yeti Beats, e apresenta participações especiais de Young Thug, Ariana Grande, The Weeknd, JID e SZA na edição padrão, bem como Eve e Gunna na edição deluxe.'
    }
]

//select items
const img = document.getElementById('album-cover');
const album = document.getElementById('album-name');
const artist = document.getElementById('artist');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


//set starting item (album)
let currentItem = 0;

//function to load inicial item
window.addEventListener('DOMContentLoaded', function(){
    showAlbum();
})

// function to show album based on item

function showAlbum(){
    //var declarada para armazenar a array[index]
    const item = albums[currentItem]; //title = index da array
    //source da imagem = imagem do item  
    img.src = item.img;
    album.textContent = item.name;
    artist.textContent = item.artist;
    info.textContent = item.text;
}

//show next album

nextBtn.addEventListener('click', function(){
    currentItem++;
    // '-1' não entendi muito bem, mas sem ele nao funciona
    //se o item for maior q o numero de items, volta para 0 e recomeça
    if(currentItem > albums.length - 1){
        currentItem = 0;
    }
    showAlbum()
})

//show prev album
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = albums.length - 1;
    }
    showAlbum()
})

// show radom album

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * albums.length)
    console.log(currentItem)
    showAlbum()
})





// ATRIBUTIONS
// header icon: // href="https://www.flaticon.com/free-icons/vinyl" title="vinyl icons">Vinyl icons created by Those Icons - Flaticon</a>
// buttons icons: css.gg/app



























