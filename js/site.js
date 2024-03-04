console.log("API Demo JS Ran!");

let num = 1;
let url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=${num}`;

const quoteContainer = document.getElementById("quote-container");

if(quoteContainer){
fetch(url)
    .then(resp => resp.json())
    .then(data => {

        console.log(data);

        let userHtml = "";

        for (quote of data) {
            console.log(quote.quote);
            console.log(quote.character);
            userHtml += getUserHtml(quote);
        }

        quoteContainer.innerHTML = userHtml;
    })
    .catch(error => {
        console.error('Error fetching quotes:', error);
    });
}

function getUserHtml(quote) {
    return `<div class="quote-box">
    <div class="quoteImg">
        <img src="${quote.image}"
            alt="quote image">
    </div>
    <div>
        <h3>${quote.character}</h3>
        <span>${quote.quote}</span>
    </div>
</div>`;
}

var image = document.getElementById("slideshow");
var images = [
"./images/R34 Wallpaper.jpg",
"./images/RX-7.jpg",
"./images/Audi Quattro.jpg",
"./images/Honda NSX.jpg",
"./images/Nissan S15 Silvia.png",
"./images/Toyota AE86 Trueno.jpg",
"./images/2004 Subaru Impreza WRX STi.png"
]
var index = 0;

function slide() {
    document["slideshow"].src = images[index];
    index++;
    if (index >= images.length) {
        index = 0;
    }
}

setInterval("slide()", 2000);