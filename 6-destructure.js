const person = { name: "Jack William", colleague: "Wilson", age: 17, job: "facebook", address: "Rampura", phone: "0144444", friends: ["Tom Hanks", "Tom Cruise", "Dwayne Johnson"] };

// const { phone } = person;
// const { phone } = { name: "Jack William", colleague: "Wilson", age: 17, job: "facebook", address: "Rampura", phone: "0144444", friends: ["Tom Hanks", "Tom Cruise", "Dwayne Johnson"] };
//const { phone, age } = { name: "Jack William", colleague: "Wilson", age: 17, job: "facebook", address: "Rampura", phone: "0144444", friends: ["Tom Hanks", "Tom Cruise", "Dwayne Johnson"] };
const { phone, salary, age } = person; //salary undefined because salary is not in person object
const cName = person.colleague;
// const phone = person.phone;

console.log(cName, phone, age);
console.log(cName, phone, salary, age);
console.log("\n");

const complexObject = {
  name: "Abcd",
  info: {
    address: "Gulshan",
    leader: "Leader",
  },
};

//const { leader } = { address: "Gulshan", leader: "Leader" };
const { leader } = complexObject.info;
console.log(leader);
console.log("\n");

//using array
const friends = ["Sakib ", "Salman Khan", "Amir Khan", "Shahrukh Khan"];
const [friendNo1, secondFriend, ...restFriends] = friends;
console.log(friendNo1, secondFriend);
console.log(restFriends);
