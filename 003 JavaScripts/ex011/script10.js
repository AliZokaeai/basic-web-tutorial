function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getHours().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours} : ${minutes} : ${seconds}`;

  document.getElementById("clock").textContent = timeString;
}

function changeColor() {
  const colorBase = new Date();
  const red = colorBase.getHours();
  const green = colorBase.getHours();
  const blue = colorBase.getSeconds();
  let redValueBack = 255 - Math.ceil(red * (255 / 24));
  let greenValueBack = 255 - Math.ceil(red * green * (255 / (24 * 60)));
  let bluValueBack = 255 - Math.ceil(blue * green * red * (255 / (24 * 60 * 60)));
  document.getElementById(
    "clock"
  ).style.backgroundColor = `rgb(${redValueBack},${greenValueBack},${bluValueBack})`;

  document.getElementById("clock").style.color = `rgb(${255 - redValueBack},${
    255 - greenValueBack
  },${255 - bluValueBack})`;

  console.log(`rgb(${redValueBack},${greenValueBack},${bluValueBack})`);
}
setInterval(updateClock, 1000);
setInterval(changeColor, 1000);
