function add(n1, n2) {
  if (n2 == undefined) {
    n2 = 0;
  }
  return n1 + n2;
}

function add(n1, n2) {
  n2 = n2 || 10;
  return n1 + n2;
}

function add(n1, n2 = 10) {
  return n1 + n2;
}

const total = add(15);
console.log(total);
const total2 = add(15, 2);
console.log(total2);
