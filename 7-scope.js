let bonus = 20;

function sum(first, second) {
  let result = first + second + bonus;
  console.log(bonus);
  if (result > 9) {
    const mood = "happy";
    let mood2 = "happy2";
    var mood3 = "happy3";
    console.log(mood);
    console.log(mood2);
    console.log(mood3);
  }
  // console.log(mood);  //can not be accessed
  // console.log(mood2);  //can not be accessed
  console.log(mood3); //since inside a function
  return result;
}
const output = sum(3, 7);
// console.log(result);//can not be access outside it's scope
// console.log(mood3); //can't be accessed
console.log(bonus);
console.log(output);

console.log(day); //undefined
var day = "friday";

// console.log(day);  //error for let and constant
// let day = "friday";
