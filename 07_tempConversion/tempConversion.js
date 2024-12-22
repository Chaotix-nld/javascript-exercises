const convertToCelsius = function(fahrenheit) {
  const fracture = (5/9);
  let step1 = fahrenheit - 32;
  let step2 = step1 * fracture;
  let celcius = Math.round(step2 * 10) / 10;
  return celcius;
};

const convertToFahrenheit = function(celcius) {
  const fracture = (5/9);
  let step1 = celcius / fracture;
  let step2 = step1 + 32;
  let fahrenheit = Math.round(step2 * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
