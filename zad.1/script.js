//LOAD DATA FROM LOCAL FILES
const data = require("/data/data.json").offers;
const logo_rtb = require("/data/logo_rtb.png");
const image1 = require("/data/offer1.jpg");
const image2 = require("/data/offer2.jpg");
const image3 = require("/data/offer3.jpg");
const image4 = require("/data/offer4.jpg");
const image5 = require("/data/offer5.jpg");
const image6 = require("/data/offer6.jpg");
const images = [image1, image2, image3, image4, image5, image6];

//GET ACCESS TO HTML ELEMENTS
const plate1 = document.getElementById("pl1");
const plate2 = document.getElementById("pl2");
const plate3 = document.getElementById("pl3");
const plate4 = document.getElementById("pl4");
const plates = [plate1, plate2, plate3, plate4];
const logo = document.getElementById("logo");

//GLOBAL VARIABLES
const BORDER_INTERVAL = 2000;
let borderNumber = 0;

//FUNCTION THAT GENERATES N RANDOM OFFER NUMBERS (NUMBERS BETWEEN 1 AND 6)
const generateRandomOffers = (N) => {
    const randomOffers = new Array(N);
    let number, iterator = 0;

    while (iterator <= N-1) {
        number = Math.floor(Math.random()*6+1);

        if (randomOffers.includes(number)) continue;
        else randomOffers[iterator] = number;
        iterator++;
    }

    return randomOffers;
}

//FUNCTION THAT FILLS PLATES WITH DATA
const fillPlates = (offers) => {
    offers.forEach((offer, it) => {
        const img = document.createElement("img");
        img.src = images[offer-1];
        plates[it].appendChild(img);
        plates[it].title = data[offer-1].name;

        const price = document.createElement("div");
        price.classList = "price";

        let currency = "";
        if (data[offer-1].currency == "PLN") currency = " zł";
        else if (data[offer-1].currency == "EUR") currency = " EURO";
        else if (data[offer-1].currency == "USD") currency = " USD";
        else currency = "";

        price.innerHTML = data[offer-1].price + currency;
        plates[it].appendChild(price);
    });
};

//------------
//MAIN PROGRAM
//------------
window.onload = () => {
    const RTB_House = document.createElement("img");
    RTB_House.src = logo_rtb;
    logo.appendChild(RTB_House);

    const offers = generateRandomOffers(4);
    fillPlates(offers);

    setInterval(() => {
        plates.forEach(plate => plate.classList.remove("border"));
        
        plates[borderNumber].classList.add("border");

        borderNumber == 3 ? borderNumber = 0 : borderNumber++;
    }, BORDER_INTERVAL);
};