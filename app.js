const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadLine = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let feuture = new Date(2022 , 06 , 30 , 18 , 00 ,00);

const year = feuture.getFullYear();
const hours = feuture.getHours();
const mins = feuture.getMinutes();
const date = feuture.getDate();

let month = feuture.getMonth();
month = months[month];

const weekday = weekdays[feuture.getDay()];


giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}`



// fueture time in ms
const fuetureTime = feuture.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = fuetureTime - today;
  // 1s = 1000 ms
  // 1min = 60 s
  // 1hr = 60 min
  // 1day = 24hr

  // value in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinutes = 60*1000;

  // calculate all values
  let days = t/oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) /oneHour);
  let minutes = Math.floor((t % oneHour) /oneMinutes);
  let secondes = Math.floor((t % oneMinutes) /1000);

  // set values Array
  const values = [days ,hours ,minutes ,secondes];
  
  function formatItem(item){
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }
  items.forEach(function(item,index){
    item.innerHTML = formatItem(values[index])
  });
  if(t < 0){
    clearInterval(countDown);
    deadLine.innerHTML = `<h4 class='expired'>sorry , this giveaway has expire</h4>`
  }
}
let countDown = setInterval(getRemainingTime,1000)
getRemainingTime();