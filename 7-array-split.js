const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5); // from 2nd to 4th index

// const removed = nums.splice(2, 5); //deleting 5 elements starting index 2
const removed = nums.splice(2, 5, 77, 88, 99); //deleting and injecting 77,88,99
console.log(removed);
// console.log(part);
console.log(nums);

const together = nums.join("");
console.log(together);
const together2 = nums.join(" "); //","
console.log(together2);
const together3 = nums.join(":number ");
console.log(together3);
