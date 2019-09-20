import deepfreeze from 'deep-freeze';

// Set the age to 52
const obj = { name: 'peter', age: 25 };
deepfreeze(obj);

const obj52 = { ...obj, age: 52 };
console.log(obj52);

// Add the number 1000 to the array
const ar = [12, 33, 999];
deepfreeze(ar);

const arr1000 = [...ar, 1000];
console.log(arr1000);

// Remove john from the array
const arNames = [{ name: 'jane' }, { name: 'john' }, { name: 'ike' }];
deepfreeze(arNames);

const arNamesWithoutJohn = arNames.filter((item) => item.name !== 'john');
console.log(arNamesWithoutJohn);

// Set the age of ike to 20
const arPersonAges = [{ name: 'jane', age: 12 }, { name: 'john', age: 22 }, { name: 'ike', age: 1 }];
deepfreeze(ar);

const arPersonAges20 = arPersonAges.map((item) => {
  if (item.name === 'ike') {
    return Object.assign(item, { age: 20 });
  }
  return item;
});

console.log(arPersonAges20);

// Take the second & third element
const arSecondThird = [1, 5, 6, 1000];
deepfreeze(ar);

const arTake = arSecondThird.slice(1, 3);
console.log(arTake);
