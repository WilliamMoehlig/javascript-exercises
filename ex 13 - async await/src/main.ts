import request, { Response } from 'request';

// Timer made with promises
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

async function callTimer(time: number) {
  console.log('start');
  console.log(await setTimerp(time, 'done'));
  console.log(await setTimerp(time, 'finished'));
}

// callTimer(1000);

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

async function getPersonName<Person>(personId: number) {
  const response = await httpGet<Person>(`https://swapi.co/api/people/${personId}`);
  console.log(response.data.name);
  return response.data as Person;
}

getPersonName(1);

// make an promised based function that returns the person with the home planet (SWAPI).
interface Planet {
  name: string;
  rotation_period: string;
}

interface PersonWithPlanet extends Person {
  planet: Planet;
}

async function getPersonWithHomeWorldById<T>(peopleId: number): Promise<PersonWithPlanet> {
  const peopleResponse = await httpGet(`https://swapi.co/api/people/${peopleId}`);
  const person: Person = JSON.parse(peopleResponse.body);

  const planetResponse = await httpGet(person.homeworld);
  const personPlanet: PersonWithPlanet = Object.assign(person, { planet: JSON.parse(planetResponse.body) as Planet });

  return personPlanet;
}

async function GetPersonWithHomeWorldAsync(peopleId: number) {
  const personPlanet = await getPersonWithHomeWorldById(peopleId);
  console.log(personPlanet.name);
  console.log(personPlanet.planet.name);
}

GetPersonWithHomeWorldAsync(1);

// make an promised based function that returns the name of the person (SWAPI - people) based on the id,
// but throws an error when the call take to long.
async function expire(timeout: number): Promise<any> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Timer expired!'));
    }, timeout);
  });
}

async function getNameByIdP(timeout: number, arg: number): Promise<Person>;
async function getNameByIdP(timeout: number, ...args: number[]): Promise<Array<Person>>;

async function getNameByIdP(timeout: number, ...args: number[]): Promise<any> {
  const arrPromises: Array<Promise<number>> = [];
  args.forEach(element => {
    arrPromises.push(getPersonName(element));
  });

  const result = await Promise.race([expire(timeout), Promise.all(arrPromises)]);
  if (result.length > 1) {
    return result as Array<Person>;
  }
  return result[0] as Person;
}

getNameByIdP(7000, 1, 3).then(res => {
  console.log(res[1].name);
});
