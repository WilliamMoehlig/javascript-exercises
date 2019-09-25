import httpGet from './httphelper';

function expire(timeout) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout Error'));
    }, timeout);
  });
}

export default async function getPersons(timeout, ...ids) {
  const promises = ids.map(async id => {
    const res = await httpGet(`https://swapi.co/api/people/${id}`);
    return res.data;
  });
  const results = await Promise.race([expire(timeout), Promise.all(promises)]);
  if (results.length === 1) {
    return results[0];
  }
  return results;
}
