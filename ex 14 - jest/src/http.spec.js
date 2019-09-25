import request from 'request';
import httpGet from './http';

describe('httpGet', () => {
  test('request should return object', async () => {
    // Arrange
    const uri = 'http://www.google.be';
    const nameObject = { name: 'william' };
    const mockObject = { data: nameObject };
    const resObject = { statuscode: 200, body: JSON.stringify(nameObject) };
    const getFunction = jest.spyOn(request, 'get').mockImplementation((url, cb) => cb(null, resObject));
    // Act
    const result = await httpGet(uri);
    // Assert
    expect(result).toBeObject();
    expect(result).toMatchObject(mockObject);
    expect(getFunction).toHaveBeenCalledWith(uri, expect.any(Function));
  });

  test('request should only accept status code 200', async () => {
    // Arrange
    const uri = 'http://www.google.be';
    const nameObject = { name: 'william' };
    const resObject = { statuscode: 404, body: JSON.stringify(nameObject) };
    jest.spyOn(request, 'get').mockImplementation((url, cb) => cb(null, resObject));
    // Act
    try {
      await httpGet(uri);
    } catch (err) {
      // Assert
      expect(err.message).toMatch('http');
    }
  });

  test('request should give error', async () => {
    // Arrange
    const uri = 'http://www.google.be';
    const error = new Error('bad');
    jest.spyOn(request, 'get').mockImplementation((url, cb) => cb(error, null));
    // Act
    try {
      await httpGet(uri);
    } catch (err) {
      // Assert
      expect(err).toBe(error);
    }
  });
});
