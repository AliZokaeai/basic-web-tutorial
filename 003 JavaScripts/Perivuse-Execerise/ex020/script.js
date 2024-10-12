let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "tomato";
//   });
//   button.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//   });
// });

// const newButton = document.createElement("button"); //step 1
// newButton.textContent = "Button 5"; //step 2
// newButton.classList = "myButtons"; //step 2-1
// document.body.appendChild(newButton); //step 3

buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
  });
});

//9:43:26
