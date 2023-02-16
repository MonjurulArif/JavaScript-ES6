function doubleIt(num) {
  return num * 2;
}
const result = doubleIt(5);
console.log(result);

const doubleIt2 = function addFunction(num) {
  return num * 2;
};
const result2 = doubleIt2(7);
console.log(result2);

const doubleIt3 = (num) => num * 2;
const result3 = doubleIt3(9);
console.log(result3);

const add = (x, y) => x + y;
const result4 = add(20, 24);
console.log(result4);

const give = () => 7;
const result5 = give();
console.log(result5);

const calculation = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const mul = x * y;
  const div = x / y;

  return mul;
};
const result6 = calculation(8, 5);
console.log(result6);
