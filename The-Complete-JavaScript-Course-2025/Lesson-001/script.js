const hasDriverLisense = true;
const hasGoodVision = true;

console.log(hasDriverLisense && hasGoodVision);
console.log(hasDriverLisense || hasGoodVision);
console.log(!hasDriverLisense);

const shoudlDrive = hasDriverLisense && hasGoodVision;

if (shoudlDrive) {
  console.log("Sara is able to drive");
} else {
  console.log("Someone else should driv...");
}

const isTired = true;

console.log(hasDriverLisense && hasGoodVision && isTired);
