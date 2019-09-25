import getPersons from './service';
import httpGet from './httphelper';

jest.mock('./httphelper');

describe('optional', () => {
  describe('getPersons', () => {
    let timeout;
    let id;
    let res;
    let res2;
    let res3;
    let name;
    let name2;
    let name3;
    beforeAll(() => {
      timeout = 1000;
      id = 1;
      name = 'Luke Skywalker';
      name2 = 'C-3PO';
      name3 = 'R2-D2';
      res = { data: { name } };
      res2 = { data: { name: name2 } };
      res3 = { data: { name: name3 } };
    });
    it('should return one person', async () => {
      // Arrange
      httpGet.mockReturnValue(Promise.resolve(res));
      // Act
      const person = await getPersons(timeout, id);
      // Assert
      expect(httpGet).toHaveBeenCalledTimes(1);
      expect(person.name).toBe(name);
    });

    it('should return multiple persons', async () => {
      // Arrange
      httpGet.mockReturnValueOnce(Promise.resolve(res));
      httpGet.mockReturnValueOnce(Promise.resolve(res2));
      httpGet.mockReturnValueOnce(Promise.resolve(res3));
      // Act
      const persons = await getPersons(timeout, id, 2, 3);
      // Assert
      expect(httpGet).toHaveBeenCalledTimes(4);
      expect(persons[0].name).toBe(name);
      expect(persons[1].name).toBe(name2);
      expect(persons[2].name).toBe(name3);
    });
  });
});
