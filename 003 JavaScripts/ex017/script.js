// const newH1 = document.createElement("h1");
// newH1.textContent = "I like pitzza";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// document.body.append(newH1);
// document.body.prepend(newH1);

// document.getElementById("box1").append(newH1);
//document.getElementById("box1").prepend(newH1);

//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box2);

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[1]);

//document.getElementById("box1").append(newH1);
//document.getElementById("box1").removeChild(newH1);

const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// document.getElementById("fruits").append(newListItem);

//const orange = document.getElementById("orang");
//document.getElementById("fruits").insertBefore(newListItem, orange);
//

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[4]);
//9:03:06
