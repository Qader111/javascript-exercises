const convertToCelsius = function(number) {
  let answer  = number - 32;
  answer = answer * 5; 
  answer = answer / 9;
  if (answer % 2  === 0){
    return answer; 
  }
  answer = answer.toFixed(1);
  return parseFloat(answer);

};

const convertToFahrenheit = function(number) {
  let answer = (number * (9/5)) + 32;
  if (answer % 2  === 0){
    return answer; 
  }
  answer = answer.toFixed(1);
  return parseFloat(answer);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
