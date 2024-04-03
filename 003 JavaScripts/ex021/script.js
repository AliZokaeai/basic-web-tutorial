// const myButton = document.getElementById("myButton");
// const myH1 = document.getElementById("myH1");
// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.toggle("hover");
// });
// myButton.addEventListener("mouseover", (event) => {
//     event.target.classList.add("hover");
//   });
// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.remove("hover");
// });

// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.toggle("hover");
// });
//--------------
// myButton.classList.add("enabled");
// myH1.classList.add("enabled");

// myButton.addEventListener("click", (event) => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.classList.replace("disabled", "enabled");
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// });

// myH1.addEventListener("click", (event) => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.classList.replace("disabled", "enabled");
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// });
//------------------
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.classList.add("enabled");
  button.addEventListener("mouseover", (event) => {
    event.target.classList.add("hover");
  });
  button.addEventListener("mouseout", (event) => {
    event.target.classList.remove("hover");
  });
  button.addEventListener("mouseout", (event) => {
    event.target.classList.remove("hover");
  });
});

buttons.forEach((button) => {});

//9:56:38