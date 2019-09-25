import request from 'request';

export default function httpGet(url) {
  return new Promise((resolve, reject) => {
    request.get(url, (err, res) => {
      if (err) {
        reject(err);
        return;
      }

      if (res.statuscode !== 200) {
        reject(new Error('http error'));
        return;
      }
      const extendedRes = Object.assign(res, {
        data: JSON.parse(res.body),
      });
      resolve(extendedRes);
    });
  });
}
