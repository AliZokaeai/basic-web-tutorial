for (let i = 10; i >= 1; i--) {
  let d = "";
  for (let j = 10; j >= 1; j--) {
    if (i * j < 10) {
      d += ` ${i * j} `;
    } else {
      d += ` ${i * j}`;
    }
  }
  console.log(d);
}
