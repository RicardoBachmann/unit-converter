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
  console.log(unitInputEl.value);
});
