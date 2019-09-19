//first solution
console.log("First solution");

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("I eat first");
  }
}

class Rabbit extends Animal {
  jump() {
    console.log("I jump first");
  }
}

const rabbit = new Rabbit("rabbit");

rabbit.eat();
rabbit.jump();
console.log(rabbit.name);
console.log("");

//second solution
console.log("Second solution");

const animal2 = Object.create(null);
animal2.eat = function() {
  console.log("I eat second");
};

const rabbit2 = Object.create(animal2);
rabbit2.jump = function() {
  console.log("I jump second");
};

rabbit2.eat();
rabbit2.jump();
console.log("");

//third solution
console.log("Third solution");

function Animal3() {}

Animal3.prototype.eat = function() {
  console.log("I eat third");
};

const rabbit3 = new Animal3();
rabbit3.jump = function() {
  console.log("I jump third");
};

rabbit3.eat();
rabbit3.jump();
console.log("");

//fourth solution
console.log("Fourth solution");

function Animal4() {}

Animal4.prototype.eat = function() {
  console.log("I eat fourth");
};

function Rabbit4() {}

Rabbit4.prototype.__proto__ = Animal4.prototype;
Rabbit4.prototype.constructor = Animal4;

Rabbit4.prototype.jump = function() {
  console.log("I jump fourth");
};

const rabbit4 = new Rabbit4();

rabbit4.eat();
rabbit4.jump();
