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
const plateImg = document.getElementById("plateImg");
const description = document.getElementById("description");
const price = document.getElementById("price");
const button = document.getElementById("button");
const logo = document.getElementById("logo");

//GLOBAL VARIABLES
const SLIDER_INTERVAL = 2000;
let offerNumber = 0;
let sliderON = true;

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

//FUNCTION THAT FILLS BANNER WITH OFFER DATA
const fillProduct = (offer) => {
        plateImg.src = images[offer-1];

        description.innerHTML = data[offer-1].name;

        let currency = "";
        if (data[offer-1].currency == "PLN") currency = " zł";
        else if (data[offer-1].currency == "EUR") currency = " EURO";
        else if (data[offer-1].currency == "USD") currency = " USD";
        else currency = "";
        price.innerHTML = data[offer-1].price + currency;
};

//FUNCTION THAT RUNS THE SLIDER
const runSlider = () => {
    const slider = setInterval(() => {
        fillProduct(offers[offerNumber]);
        offerNumber == 2 ? offerNumber = 0 : offerNumber++;
    }, SLIDER_INTERVAL);

    return slider;
};

//------------
//MAIN PROGRAM
//------------
const offers = generateRandomOffers(3);
window.onload = () => {
    const RTB_House = document.createElement("img");
    RTB_House.src = logo_rtb;
    logo.appendChild(RTB_House);

    fillProduct(offers[0]);
    offerNumber++;

    let slider = runSlider();

    button.addEventListener("click", () => {
        if (sliderON) {
            clearInterval(slider);
            button.innerHTML = "Continue";
            sliderON = false;
        }
        else {
            slider = runSlider();
            button.innerHTML = "Check";
            sliderON = true;
        }
    });
};