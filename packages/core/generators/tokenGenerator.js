
// Used to generate random api tokens
let max = 

function generateRandomToken(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }