var body = document.body; 
var date = document.getElementById('date');
var jokeArea = document.getElementById('joke');
var loadJoke;


body.style.background = "hsla(" + Math.floor(Math.random() * (360)) + ", 75%, 58%, 1)";

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 

let months = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec']; 

const today = new Date(); 
var dayName = days[today.getDay()]; 
let monthName = months[today.getMonth()]; 
let day = today.getDate(); 
let month = today.getMonth() + 1; 
let year = today.getFullYear(); 

let currentDate = `${monthName}. ${day} ${year}`; 

date.innerHTML = currentDate;




async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
  
// TODO: Load a quote
// TODO: store quote  // TODO: Change quote at a certain time 

  
    const {joke} = await response.json();
    jokeArea.innerHTML = joke; 
  }
  

   fetchJoke();