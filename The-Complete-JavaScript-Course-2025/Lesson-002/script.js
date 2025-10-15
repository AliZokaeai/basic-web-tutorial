"use stric";

function fruiteProcessor(apple, oranges) {
  console.log(apple, oranges);

  const juice = `Juice with ${apple} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruiteProcessor(1, 2));
