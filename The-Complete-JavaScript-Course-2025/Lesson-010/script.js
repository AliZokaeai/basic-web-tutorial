const poll = {
  question: "What is your favourit programming langauge?",
  options: ["0:JavaScript", "1:Python", "2:Rust", "3:C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.question}\n${this.options.join("\n")}\n(Write option number)`)
    );
    console.log(answer);

    typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;

    this.displayResult();
    this.displayResult("string");
  },
  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll reuslt are ${this.answers.join(", ")}`);
    }
  },
};

// poll.registerNewAnswer();
document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5, 3, 4] }, string);
