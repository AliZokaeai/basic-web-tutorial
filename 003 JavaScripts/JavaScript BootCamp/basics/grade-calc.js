let gradeCalc = function (score, totalScore) {
  let percent = Math.ceil((score / totalScore)* 100);
  let letterGrade = "";

  if (percent >= 90) {
    letterGrade = "A";
  } else if (percent >= 80) {
    letterGrade = "B";
  } else if (percent >= 70) {
    letterGrade = "C";
  } else if (percent >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "E";
  }
  return `You got a ${letterGrade} (${percent}%)`;
};

let result = gradeCalc(0.06, 7);
console.log(result);
