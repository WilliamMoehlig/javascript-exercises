import request, { Response } from 'request';

// Write a function that return an argument after 1 second.

console.log('start');

function waitASecond(arg: string, cb: (arg: string) => void) {
  setTimeout(function waitForSecond() {
    cb(arg);
  }, 1000);
}

waitASecond('peter', arg => {
  return console.log('done', arg);
});

// Write a countdown function
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
});

interface Person {
  name: string;
  homeworld: string;
  height: string;
}

// Call SWAPI api get person name with id 1
function getPersonName(id: number) {
  request.get(`https://swapi.co/api/people/${id}`, function(error: any, response: Response) {
    if (response.statusCode === 200) {
      const person: Person = JSON.parse(response.body);
      console.log(person.name);
    }
  });
}

getPersonName(1);

// Get planet name by the id of a person (nested callbacks)
interface Planet {
  name: string;
  rotation_period: string;
}

function getHomePlanetById(peopleId: number, callback: (error: Error | null, planetName?: string) => void) {
  request.get(`https://swapi.co/api/people/${peopleId}`, (error: any, response: Response) => {
    if (error) {
      callback(error);
      return;
    }
    if (response.statusCode !== 200) {
      callback(new Error('Not found'));
      return;
    }
    const person: Person = JSON.parse(response.body);

    request.get(person.homeworld, (error: any, response: Response) => {
      if (error) {
        callback(error);
        return;
      }
      if (response.statusCode !== 200) {
        callback(new Error('Http Error'));
      }
      const planet: Planet = JSON.parse(response.body);
      callback(null, planet.name);
    });
  });
}

getHomePlanetById(1, (err, planet) => {
  if (err) {
    return console.log(err);
  }
  console.log(planet);
});

// Call SWAPI api get person name with id 1 with a timeout timer
function getNameById(peopleId: number, timeout: number, callback: (err: Error | null, name?: string) => void) {
  let timerExpired = false;
  const timerId = setTimeout(() => {
    callback(new Error('timeout'));
    timerExpired = true;
  }, timeout);

  request.get(`https://swapi.co/api/people/${peopleId}`, (err, res) => {
    clearTimeout(timerId);
    if (timerExpired) {
      return;
    }
    if (err) {
      callback(err);
      return;
    }
    if (res.statusCode !== 200) {
      callback(new Error('Not Found'));
    }
    const person = JSON.parse(res.body) as Person;
    callback(null, person.name);
  });
}

getNameById(1, 1050, (err, name) => {
  if (err) {
    return console.log(err);
  }
  console.log(name);
});
