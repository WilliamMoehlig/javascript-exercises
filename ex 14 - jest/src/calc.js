export function sum(a, b) {
  if (a === null || b === null || b === undefined || a === undefined) {
    throw new Error("Sum values can't be null or undefined");
  }
  if (a.length < 0 || b.length < 0) {
    throw new Error("Parameter values can't be empty");
  }

  let numberA = a;
  let numberB = b;

  if (typeof a === 'string') {
    numberA = parseInt(numberA, 10);
  }
  if (typeof b === 'string') {
    numberB = parseInt(numberB, 10);
  }

  return Number(numberA) + Number(numberB);
}

export async function sumAsync(a, b) {
  return new Promise(resolve => {
    setTimeout(() => resolve(sum(a, b)), 500);
  });
}

export function subtract(a, b) {
  return a - b;
}
