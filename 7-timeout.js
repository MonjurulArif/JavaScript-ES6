function doSomething() {
  console.log(3333);
}
console.log(2222);
// doSomething(); // 2222 3333 4444
// setTimeout(doSomething, 4000); // 2222 4444 4445 3333
// setTimeout(function () {
//   console.log("Lazy and waiting");
// }, 4000);

//asynchronous flow. setTimeout works at last
setTimeout(() => {
  console.log("Lazy and waiting");
}, 4000);
console.log(4444);
console.log(4445);
console.log(4446);

//executed after a certain time
setInterval(function () {
  console.log("Doing it");
}, 2000);
