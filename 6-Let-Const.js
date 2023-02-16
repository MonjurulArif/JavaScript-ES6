const name = "Arif";
// name = "BBB";    const name can not be changed
console.log(name);

const numbers = [12, 57];
numbers[1] = 88;
numbers.push(17);
console.log(numbers);
// numbers = ["A","bdd","kkk"]; not possible

const person = { name: "A", phone: 444 };
console.log(person);

let name1 = "Rahim aa";
name1 = "Jamal bb";
console.log(name1);

let sum = 0;
// for (var i = 0; i < 10; i++) {
//   sum += i;
// }
// console.log(i);  i =10

for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(i); //i can not be found in the outside of for scope
