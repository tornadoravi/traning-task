
const gmtHours = new Date().getUTCHours();
console.log(gmtHours); 

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function getGMTTime(date = new Date()) {
  return [
    padTo2Digits(date.getUTCHours()),
    padTo2Digits(date.getUTCMinutes()),
    padTo2Digits(date.getUTCSeconds()),
  ].join(':');
}

console.log(getGMTTime()); 
