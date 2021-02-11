// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callback(data);
  });
};

// CHANGE 1: Create new callback function
const printCatBreed = breed => {
  console.log('Return Value: ', breed)
};

// CHANGE 2: Runs the breedDetailsFromFile function passing 2 arguments
breedDetailsFromFile('Bombay', printCatBreed);

// REMOVED: Previous call
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); 