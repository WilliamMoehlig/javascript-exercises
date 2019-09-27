export default function snail(arr) {
  const snailArray = [];
  const arrFirstElement = [];
  const arrLastElement = [];

  for (let index = 0; index < arr.length; index++) {
    if (index === 0) {
      arrFirstElement.push(arr[index]);
    }
    if (index === arr.length - 1) {
      arrLastElement.push(arr[index]);
    }
  }

  console.log(arrFirstElement, arrLastElement);

  return snailArray;
}
