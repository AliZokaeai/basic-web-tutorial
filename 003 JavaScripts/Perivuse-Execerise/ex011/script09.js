/*function sayHello() {
  console.log("Hello");
}

setTimeout(sayHello, 3000);

const timeoutId = setTimeout(function () {
  console.log("Hello Again");
}, 4000);

clearTimeout(timeoutId);
*/
let timeoutId;
function startTimer() {
  timeoutId = setTimeout(() => {
    window.alert("Hello");
  }, 3000);
}

function clearTimer() {
  clearTimeout(timeoutId);
  window.alert("Clear time out");
}
