const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;
function convert() {
  if (toFahrenheit.checked) {
    temp = Math.round((Number(textBox.value) * 9) / 5 + 32);
    result.textContent = `Temp is ${temp} °F`;
  } else if (toCelsius.checked) {
    temp = Math.round((Number(textBox.value) - 32) * (5 / 9));
    result.textContent = `Temp is ${temp} °C`;
  } else {
    result.textContent = "Select a unit!";
  }
}
