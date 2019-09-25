import request from 'request';
// javascript version
class RequestError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = message;
    this.statusCode = statusCode;

    // fix name
    Object.defineProperty(this, 'name', {
      value: new.target.name,
      enumerable: false,
    });

    // fix prototype
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default function httpGet(url) {
  return new Promise((resolve, reject) => {
    request.get(url, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new RequestError('Http Error', res.statusCode));
      }
      const extendedRes = Object.assign(res, {
        data: JSON.parse(res.body),
      });
      resolve(extendedRes);
    });
  });
}
