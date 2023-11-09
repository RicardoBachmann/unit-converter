/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;

const unitInputEl = document.getElementById("unit-input");
const convertBtnEl = document.getElementById("convert-btn");
const lengthValueEl = document.getElementById("length-value");
const volumeValueEl = document.getElementById("volume-value");
const massValueEl = document.getElementById("mass-value");

convertBtnEl.addEventListener("click", function () {
  lengthValueEl.innerHTML = `${unitInputEl.value} meters = ${
    meterToFeet * unitInputEl.value
  } feet | ${unitInputEl.value} feet = ${
    unitInputEl.value / meterToFeet
  } meters  `;

  volumeValueEl.innerHTML = `${unitInputEl.value} liters = ${
    literToGallon * unitInputEl.value
  } gallons | ${unitInputEl.value} gallons = ${
    unitInputEl.value / literToGallon
  }`;

  massValueEl.innerHTML = `${unitInputEl.value} kilos = ${
    unitInputEl.value * kilogramToPound
  } pounds | ${unitInputEl.value} pounds = ${
    unitInputEl.value / kilogramToPound
  }`;
});
