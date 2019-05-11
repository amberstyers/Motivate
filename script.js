console.log("javascript file is connected");



const quotes = [
    "If you feel like you are not good enough, pet a goat. - Amber",
    "The elevator to success is out of order. You will have to use the stairs. One step at a time. - Joe Girard",
    "If you think you are too small to make a difference, try sleeping with a mosquito. - Dalai Lama",
    "I have not failed. I have just found 10,000 ways that will not work. - Thomas Edison",
    "Try eating chips while doing work. - Amber",
]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  function motivate() {

    let numberQuotes = quotes.length; 
    let randomDecimal = Math.random();
    let randomNumberwithDecimal = randomDecimal * numberQuotes;
    let randomInteger = Math.floor(randomNumberwithDecimal);
    document.getElementById("displayText").innerHTML = quotes[randomInteger]; 

  }
console.log([]);

  console.log(getRandomInt(6));
  // expected output: 0, 5, 3, 4, 1 or 2
  

  


document.getElementById("displayText").innerHTML = quotes[1];
