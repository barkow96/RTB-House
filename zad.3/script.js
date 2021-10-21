//GET ACCESS TO HTML ELEMENTS
const endDateDiv = document.getElementById("endDate");
const timerDiv = document.getElementById("timer");

//DEFINE END DATE
const endDate = new Date("October 25, 2021 12:50:00");

//------------
//MAIN PROGRAM
//------------
endDateDiv.innerHTML = "Odliczanie do: " + endDate.toLocaleString();
window.onload = () => {
    const countDown = setInterval(() => {
        const nowDate = new Date().getTime();
        const difference = endDate - nowDate;
    
        let days = Math.floor(difference / (1000*60*60*24));
        let hours = Math.floor((difference % (1000*60*60*24)) / (1000*60*60));
        let minutes = Math.floor((difference % (1000*60*60)) / (1000*60)) + 1;
    
        if (days <= 0 && hours <= 0 && minutes <= 0) timerDiv.innerHTML = "KONIEC";
        else {
            if (days < 10) days = "0" + days;
            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
    
            timerDiv.innerHTML = `${days} - ${hours} - ${minutes}`;
        } 
    }, 1000);
};