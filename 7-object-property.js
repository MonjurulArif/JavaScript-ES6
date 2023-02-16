const students = [
  { id: 21, name: "A" },
  { id: 31, name: "B" },
  { id: 41, name: "C" },
  { id: 71, name: "D" },
];

const names = students.map((s) => s.name);
const ids = students.map((s) => s.id);
const ids2 = students.filter((s) => s.id > 40);
const ids3 = students.find((s) => s.id > 40);

console.log(names);
console.log(ids);
console.log(ids2);
console.log(ids3);
console.log("\n");
