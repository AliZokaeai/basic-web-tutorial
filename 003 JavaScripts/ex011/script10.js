function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours} : ${minutes} : ${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

function changeColor() {
  const colorBase = new Date();
  const red = colorBase.getHours();
  const green = colorBase.getHours();
  const blue = colorBase.getSeconds();
  let redValueBack = 255 - Math.ceil(red * 3600 * (255 / 86400));
  let greenValueBack = 255 - Math.ceil(red * green * 60 * (255 / 86400));
  let bluValueBack = 255 - Math.ceil((red * green * 60 + blue) * (255 / 86400));
  document.getElementById(
    "clock"
  ).style.backgroundColor = `rgba(${redValueBack},${greenValueBack},${bluValueBack},0.5)`;

  document.getElementById("clock").style.color = `rgba(${255 - redValueBack},${
    255 - greenValueBack
  },${255 - bluValueBack},0.7)`;

  console.log(`rgba(${redValueBack},${greenValueBack},${bluValueBack},0.5)`);
}
setInterval(updateClock, 1000);
setInterval(changeColor, 1000);

//07:16:05
