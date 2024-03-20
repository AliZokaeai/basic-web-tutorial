function addPart() {
    const container = document.getElementById("container");
    const node = document.createElement("p");
    const textnode = document.createTextNode("Enter somethings");

    node.appendChild(textnode);
    container.appendChild(node);
  }

// const button = document.getElementById("addButton");
// button.addEventListener("click", addPart);
