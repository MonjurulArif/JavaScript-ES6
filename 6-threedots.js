const age1 = [12, 14, 16, 13, 17];
const age2 = [15, 16, 12];
const age3 = [25, 36, 22, 29];
const allAges = age1.concat(age2).concat([7]).concat(age3);
const allAges2 = [age1, age2, 5, age3]; //every element as array
const allAges3 = [...age1, ...age2, 5, ...age3];
console.log(allAges);
console.log(allAges2);
console.log(allAges3);

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

const money = [350, 450, 250, 770];
const maximum2 = Math.max(...money);
console.log(maximum2);
