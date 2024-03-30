function func1(callback1, callback2, callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
    callback1();
    callback2();
  }, 3000);
}

function func() {
  console.log("task 2");
}
function func3() {
  console.log("task 3");
}
function func4() {
  console.log("task 4");
}

func1(func, func3, func4);
