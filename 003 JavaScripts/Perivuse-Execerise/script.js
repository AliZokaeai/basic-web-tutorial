let person = {
  firstName: "Jhon",
  lastName: "Doe",
};

let contact = {
  firstName: "Jhon",
  lastName: "Doe",
  email: "examle@example.com",
  phone: "(408)-555-9999",
  address: {
    building: "4000",
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

console.log(contact.firstName);
console.log(contact["firstName"] + " " + contact.lastName);
