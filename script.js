/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let initialValue = 0;

const unitInputEl = document.getElementById("unit-input");
const lengthValueEl = document.getElementById("length-value");
const volumeValueEl = document.getElementById("volume-value");
const massValueEl = document.getElementById("mass-value");

function renderUnits() {
  initialValue = unitInputEl.value;
  unitInputEl.value = "";
  convertLength();
  convertVolume();
  convertMass();
}

function convertLength() {
  let meter = (initialValue * 0.3048).toFixed(2);
  let feet = (initialValue * 3.2808).toFixed(2);
  lengthValueEl.innerHTML = `${initialValue} meters = ${feet} feet | ${initialValue} feet = ${meter} meters`;
}

function convertVolume() {
  let liter = (initialValue * 0.264172).toFixed(2);
  let gallons = (initialValue * 3.78541).toFixed(2);
  volumeValueEl.innerHTML = `${initialValue} liters = ${liter} gallons | ${initialValue} gallons = ${gallons} liters`;
}

function convertMass() {
  let kilos = (initialValue * 2.20462).toFixed(2);
  let pounds = (initialValue * 0.453592).toFixed(2);
  massValueEl.innerHTML = `${initialValue} kilos = ${kilos} pounds | ${initialValue} pounds = ${pounds} kilos `;
}
