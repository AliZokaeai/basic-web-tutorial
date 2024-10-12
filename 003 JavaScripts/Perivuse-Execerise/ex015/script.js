const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "lightblue";
myHeading.style.padding = "10px";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");

for (let fruit of fruits) {
  fruit.style.backgroundColor = "yellow";
}

Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "orange";
});

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
h4Elements[0].style.backgroundColor = "yellow";

for (let h4Element of h4Elements) {
  h4Element.style.backgroundColor = "red";
}

for (let liElement of liElements) {
  liElement.style.backgroundColor = "lightgreen";
}

Array.from(h4Elements).forEach((h4Element) => {
  h4Element.style.backgroundColor = "yellow";
});

const element = document.querySelector(".fruits");

element.style.backgroundColor = "blue";

const Elements = document.querySelectorAll(".fruits");
Elements[2].style.backgroundColor = "yellow";

//8:32:03
