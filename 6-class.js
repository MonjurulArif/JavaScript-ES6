class Student {
  constructor(sId, sName) {
    this.id = sId;
    this.name = sName;
    this.school = "W.H. School";
  }
}

const studen1 = new Student(12, "Arif");
const studen2 = new Student(20, "Shuvo");
const studen3 = new Student(34, "Rahim");
console.log(studen1, studen2);
console.log(studen2.name, studen1.id);
console.log(studen3);
