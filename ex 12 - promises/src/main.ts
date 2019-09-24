import request, { Response } from 'request';

// Timer made with promises
console.log('start');

function setTimerp(timeout: number, arg: string) {
  return new Promise(function timerP(resolve, reject) {
    if (timeout <= 0) {
      reject(new Error('Timer must be greater than 0'));
      return;
    }

    setTimeout(function waitForSecond() {
      resolve(arg);
    }, timeout);
  });
}

setTimerp(1000, 'done')
  .then(arg => {
    console.log(arg);
    return setTimerp(1000, 'finished');
  })
  .then(arg => {
    console.log(arg);
  })
  .catch(e => console.log(e));

// create a promised based wrapper around request and use it
interface Person {
  name: string;
  homeworld: string;
  height: string;
}

interface MyResponse<T> extends Response {
  data: T;
}

function httpGet<T>(url: string): Promise<MyResponse<T>> {
  return new Promise((resolve, reject) => {
    request.get(url, function httpGetter(error: Error, response: Response) {
      if (error) {
        reject(error);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error('The response has failed!'));
        return;
      }
      const res = Object.assign(response, { data: JSON.parse(response.body) });
      resolve(res);
    });
  });
}

httpGet('https://swapi.co/api/people/1')
  .then(res => {
    console.log(res.data.name);
  })
  .catch(err => {
    console.log(err);
  });

// typed version
httpGet<Person>('https://swapi.co/api/people/1')
  .then(res => {
    console.log(res.data.name);
  })
  .catch(err => {
    console.log(err);
  });

// make an promised based function that returns the person with the home planet (SWAPI).
interface Planet {
  name: string;
  rotation_period: string;
}

interface PersonWithPlanet extends Person {
  planet: Planet;
}

function getPersonWithHomeWorldById<T>(peopleId: number): Promise<PersonWithPlanet> {
  return httpGet(`https://swapi.co/api/people/${peopleId}`).then(res => {
    const person: Person = JSON.parse(res.body);
    return httpGet(person.homeworld).then(res => {
      const response: PersonWithPlanet = Object.assign(person, { planet: JSON.parse(res.body) as Planet });
      return response;
    });
  });
}

getPersonWithHomeWorldById(1).then(person => {
  console.log(person.name);
  console.log(person.planet.name);
});

// make an promised based function that returns the name of the person (SWAPI - people) based on the id,
// but throws an error when the call take to long.
function getNameByIdP(timeout: number, peopleId: number): Promise<string> {
  return new Promise((resolve, reject) => {
    let timerExpired = false;
    const timerId = setTimeout(() => {
      timerExpired = true;
    }, timeout);

    return httpGet(`https://swapi.co/api/people/${peopleId}`).then(res => {
      clearTimeout(timerId);
      if (timerExpired) {
        reject(new Error('Timer expired!'));
        return;
      }
      return JSON.parse(res.body).name;
    });
  });
}

getNameByIdP(5000, 1)
  .then(res => {
    console.log(res);
  })
  .catch(err => console.log(err));
