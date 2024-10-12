const myBox = document.getElementById("myBox");
let flag = 1;

function changeColor(event) {
  //   event.target.style.backgroundColor = "tomato";
  //   event.target.textContent = "OUCH 😡";
}

myBox.addEventListener("click", (event) => {
  if (flag == 1) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH 😡";
    flag = 0;
  } else {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😄";
    flag = 1;
  }
});

myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "lightblue";
  event.target.textContent = "click Here 🥶";
  flag = 1;
});

myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click Me 😄";
  flag = 0;
});
