let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

let otherBook = {
  title: "A people Historu",
  author: "Howard Zinn",
  pageCount: 723,
};

let getSummary = function (book) {
  return {
    summry: `${book.title} by ${book.author}`,
    pageCountSummery: `${book.title} is ${book.pageCount} pages long`,
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummery);

let convertFahrenheit = function (fahrenhit) {
  return {
    fahrenhit: fahrenhit,
    kelvin: (fahrenhit * 459.67) * (5 / 9),
    celsius: (fahrenhit - 32) * (5 / 9),
  };
};

let temps = convertFahrenheit(100);
console.log(temps);
