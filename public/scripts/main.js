var body = document.body; 
var date = document.getElementById('date');

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


function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}

refreshAt(00,00,0);



