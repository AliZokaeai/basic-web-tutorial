function cutPieces(fruit) {
  return fruit * 4;
}

function fruiteProcessor(apple, orange) {
  const applePieces = cutPieces(apple);
  const orangePieces = cutPieces(orange);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(cutPieces(3));
console.log(fruiteProcessor(3, 4));
