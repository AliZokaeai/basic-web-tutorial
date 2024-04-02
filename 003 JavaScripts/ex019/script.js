/*const myBox = document.getElementById("myBox");

document.addEventListener("keydown", (event) => {
  myBox.style.fontSize = "4.5rem";
  myBox.textContent = "🛴🌫";
  myBox.style.backgroundColor = "tomato";
});
*/
document.addEventListener("keyup", (event) => {
  myBox.style.fontSize = "7.5rem";
  myBox.style.backgroundColor = "lightblue";
  myBox.style.transform = "scale(1, 1)";
});

const myBox = document.getElementById("myBox");
const moveAmount = 10;

let x = 0;
let y = 0;

// document.addEventListener("keydown", (event) => {
//   if (event.key.startsWith("Arrow")) {
//     event.preventDefault();
//     switch (event.key) {
//       case "ArrowUp":
//         y -= moveAmount;
//         break;
//       case "ArrowDown":
//         y += moveAmount;
//         break;
//       case "ArrowLeft":
//         x -= moveAmount;
//         break;
//       case "ArrowRight":
//         x += moveAmount;
//         break;
//     }

//     myBox.style.top = `${y}px`;
//     myBox.style.left = `${x}px`;
//   }
// });

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("ArrowDown")) {
    event.preventDefault();
    myBox.style.transform = "scale(1, 1)";
    myBox.style.backgroundColor = "yellow";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("ArrowUp")) {
    event.preventDefault();
    myBox.style.transform = "rotate(180deg)";
    myBox.style.backgroundColor = "blue";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("ArrowRight")) {
    event.preventDefault();
    myBox.style.transform = "rotate(-90deg)";
    myBox.style.backgroundColor = "red";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("ArrowLeft")) {
    event.preventDefault();
    myBox.style.transform = "rotate(90deg)";
    myBox.style.backgroundColor = "green";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  } else if (event.key === "p") {
    event.preventDefault();
    myBox.style.top = `0px`;
    myBox.style.left = `0px`;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "p") {
    x = 0;
    y = 0;
  }
});
