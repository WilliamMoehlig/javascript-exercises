class Animal {
  eat = function() {
    console.log("I eat");
  };

  constructor() {}
}

const rabbit = Object.create(Animal);
rabbit.jump = function() {
  console.log("I jump");
};

const animal = Object.create(Animal);

console.log(rabbit.jump());
