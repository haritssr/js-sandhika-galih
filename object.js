class Mahasiswa {
  // let this = Object.create(Mahasiswa.prototype)
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Mahasiswa.prototype.eat
  eat() {
    console.log(`${this.name} is eating`);
    return `${this.name} is eating`;
  }

  // Mahasiswa.prototype.sleep
  sleep() {
    console.log(`${this.name} is sleep`);
    return `${this.name} is sleep`;
  }

  // Mahasiswa.prototype.sleep
  howOld() {
    console.log(`${this.name} is ${this.age} y.o`);
    return `${this.name} is ${this.age} y.o`;
  }
}

const Haris = new Mahasiswa("Haris", 24);
console.log(Haris);
console.log("Name: ", Haris.name);
console.log("Age: ", Haris.age);
console.log("Eating ->", Haris.eat());
console.log("Sleep ->", Haris.sleep());
console.log("How Old? -> ", Haris.howOld());
