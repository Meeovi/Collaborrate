
// Used to generate random api tokens

function generateRandomToken(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }