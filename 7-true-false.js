//Truthy
// '0', " " , [] , {} , true, "true" , "false"
//Falsy
// 0 , "" , undefined, null, NaN , false

const age1 = 7;
if (age1) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}

const age2 = 0;
if (age2) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}
console.log("\n");

const name = "Abcd";
if (name.length > 0) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}

if (name.length) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}

if (name) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}
console.log("\n");

const name2 = "";
if (name2) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}

const name3 = " ";
if (name3) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}
console.log("\n");

const name4 = "0";
if (name4) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}
console.log("\n");

let name5;
console.log(name5);
if (name5) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}
console.log("\n");

let name6 = null;
console.log(name6);
if (name6) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}
console.log("\n");

let name7 = NaN;
console.log(name7);
if (name7) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}
console.log("\n");

let name8 = [];
if (name8) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}
console.log("\n");

let name9 = {};
if (name9) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}
console.log("\n");

let name10 = false;
if (name10) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}
console.log("\n");

let name11 = "false";
if (name11) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}
console.log("\n");

let name12 = 0;
if (name12 || name12 == 0) {
  console.log("Condition true");
} else {
  console.log("Condition false");
}
console.log("\n");
