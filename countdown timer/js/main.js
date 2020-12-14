

const myAuido = new Audio('../audio/audio2.mp3');
const btn = document.getElementById('btn');
const audioContainer = document.querySelector('.audio');

btn.addEventListener('click', () => {
    
    myAuido.play();
    audioContainer.classList.add('active');
    btn.classList.add('active');
    btn.textContent = "🎉";
    
})


// Count Down till christmas


// The new year 
const newYear = '1 Jan 2021';
// Elements from the DOM

const countD = document.getElementById('days');
const countH = document.getElementById('hrs');
const countM = document.getElementById('mins');
const countS = document.getElementById('sec');

//CountDown function 

function countDown() {

    const newYearDate = new Date(newYear); // converts the newYear string into date
    const currentDate = new Date(); // get the current date of the day 

    /*
    First we need to get the differnece between the current date and the new year's date in order to know
    how many days, hours, minutes and seconds left for the new year
    */
   
    const totalSeconds = (newYearDate - currentDate) / 1000; // total seconds left

    const days =  Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    countD.innerText = days;
    countH.innerText = hours;
    countM.innerText = minutes;
    countS.innerText = seconds;

}


countDown();

setInterval(countDown, 1000);


