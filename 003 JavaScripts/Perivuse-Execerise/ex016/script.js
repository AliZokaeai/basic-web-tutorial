const element = document.getElementById("fruits");

const fristChailds = element.firstElementChild;

fristChailds.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ulElement) => {
  const fristChaild = ulElement.firstElementChild;
  fristChaild.style.backgroundColor = "Orange";
});

const Elements = document.getElementById("fruits");

const lastChaild = Elements.lastElementChild;

lastChaild.style.backgroundColor = "blue";

const UlElements = document.querySelectorAll("ul");
UlElements.forEach((UlElement) => {
  const lastChailds = UlElement.lastElementChild;
  lastChailds.style.backgroundColor = "purple";
});

let SomeElement = document.getElementById("Apple");
let nextSibiling = SomeElement.nextElementSibling;
nextSibiling.style.backgroundColor = "red";

SomeElement = document.getElementById("Potatos");
let pervSibling = SomeElement.previousElementSibling;
pervSibling.style.backgroundColor = "green";

SomeElement = document.getElementById("Apple");
let parent = SomeElement.parentElement;
parent.style.backgroundColor = "lightblue";

SomeElement = document.getElementById("vegtables");
let children = SomeElement.children;
Array.from(children).forEach((child) => {
  child.style.backgroundColor = "lightgreen";
});

children[0].style.backgroundColor = "green";
