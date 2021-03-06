var fs = require('fs');
var highestNumber = 0;
var lowestNumber = 0;
var totalSum = 0;
var averageNumber = 0;

// this function will take in the text file and make sure that there are no errors, and puts the numbers
// into a readable array
function getNumbers(callback){
fs.readFile('numbers.txt', 'utf-8', function(err, fileContents){
  if(err) {
    console.log("There was an error:", err, "!");
    }
    var numbers = fileContents.split(', ');
    callback(numbers);
  });
}
// this function does all the heavy lifting- takes the array of numbers and find the highest, lowestNumber
// and the average and console logs them out!
function done(numbers) {
  for(var i = 0; i<numbers.length; i++){
    numbers[i]=parseInt(numbers[i]);
    totalSum += numbers[i];
    if(numbers[i]>highestNumber){
      highestNumber= numbers[i]
    };
    if(numbers[i]<lowestNumber){
      lowestNumber = numbers[i]
    }
    averageNumber = parseInt(totalSum/numbers.length)
  }
  console.log('Highest Number is ', highestNumber);
  console.log('Lowest Number is ', lowestNumber);
  console.log('Average Number is ', averageNumber);
  console.log('All done!');
};
getNumbers(done);
