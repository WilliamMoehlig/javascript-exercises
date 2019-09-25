import getPersons from './service';

getPersons(1000, 1).then(person => {
  console.log(person.name);
});

getPersons(5000, 2, 3).then(persons => {
  persons.forEach(person => {
    console.log(person.name);
  });
});
