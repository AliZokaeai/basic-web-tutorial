const numbers = [1, 2, 3, 4, 20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];
numbers.forEach(function (num) {
  console.log(num * 2);
});
const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});
console.log(numDetail);

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});

console.log(abbrevs);

const squar = (x) => {
  return x * 2;
};

const parylist = numbers.map((n) => (n % 2 === 0 ? "even" : "odd"));

console.log(parylist);

let movies = ["the Fantastic Mr.fox", "Mr and Mrs. Smith", "Mrs. Doubtfire", "Mr. Deeds"];

const movie = movies.find((movies) => {
  return movies.includes("Mr");
});

console.log(movie);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratcheet", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentelman In Mosco",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

const goodBook = books.find((b) => b.rating >= 4.3);

console.log(goodBook);
