const button = document.getElementById("convert-btn");
const input = document.getElementById("number");
const result = document.getElementById("output");

const roman = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

const numberToNumerals = (number) => {
  let result = '';
  for (const key in roman) {
    while (number >= roman[key]) {
      result += key;
      number -= roman[key];
    }
  }
  return result;
};

button.addEventListener('click', () => {
  const num = parseInt(input.value, 10);
  if (isNaN(num)) {
    result.textContent = "Please enter a valid number";
  } else if (num <= 0) {
    result.textContent = "Please enter a number greater than or equal to 1";
  } else if (num >= 4000) {
    result.textContent = "Please enter a number less than or equal to 3999";
  } else {
    result.textContent = numberToNumerals(num);
  }
});
