import request, { Response } from 'request';

/* //Write a function that return an argument after 1 second.

console.log('start');

function waitASecond(arg: string, cb: (arg: string) => void) {
  setTimeout(function waitForSecond() {
    cb(arg);
  }, 1000);
}

waitASecond('peter', arg => {
  return console.log('done', arg);
});

//Write a countdown function
function countDown(arg: string, cnt: number, cb: (arg: string, cnt: number, end: boolean) => void) {
  setTimeout(function countDownTimer() {
    if (cnt > 0) {
      cb(arg, cnt, cnt === 1);
      countDown(arg, --cnt, cb);
    }
  }, 1000);
}

countDown('peter', 5, (arg: string, cnt: number, end: boolean) => {
  console.log(`ready ${arg}: `, cnt);
  if (end) {
    console.log(`done`);
  }
}); */

// interface Person {
//   name: string;
// }

//Call SWAPI api get person name with id 1
// function getPersonName(id: number) {
//   request.get('https://swapi.co/api/people/1', function(error: any, response: Response) {
//     if (response.statusCode === 200) {
//       const person: Person = JSON.parse(body);
//       console.log(person);
//       return person.name;
//     }
//   });
// }

// getPersonName(1);

// function getHomePlanetById(peopleId: number, callback: (error: Error | null, planetName?: string) => void) {
//   request.get(`https://swapi.co/api/people/${peopleId}`, (error: any, response: Response) => {});
// }

// getHomePlanetById(1, (err, planet) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(planet);
// });
