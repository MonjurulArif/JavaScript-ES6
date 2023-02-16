const numbers = [3, 4, 5, 6, 7, 8];
output = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element * element;
  output.push(result);
}
console.log(output);
console.log("\n");

// function square(element){
//   return element*element;
// }
// const square = element => element * element;
//const square = x => x*x;

// const result2 = numbers.map(function (element, index, array) {
const result2 = numbers.map(function (element) {
  // console.log(element, index, array);
  return element * element;
});
//const result2 = numbers.map((x) => x * x);

console.log(result2);
console.log("\n");

const bigger = numbers.filter((x) => x > 5);
console.log(bigger);
console.log("\n");

const smaller = numbers.filter((x) => x < 5);
console.log(smaller);
console.log("\n");

const smaller2 = numbers.filter((x) => x < 3);
console.log(smaller2);
console.log("\n");

const smaller3 = numbers.find((x) => x > 5); //returns first after 5
console.log(smaller3);
console.log("\n");
