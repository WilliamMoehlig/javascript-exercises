import MockDate from 'mockdate';
import Greeting from './greeting';

describe('katas', () => {
  describe('greeter', () => {
    let name;
    let checkOutput;
    beforeEach(() => {
      MockDate.set(new Date(2019, 9, 29, 14));
      name = 'William';
    });
    it('should return the correct name without trims', () => {
      // Arrange
      checkOutput = `Hello ${name}`;
      // Act
      const returnedMessage = Greeting(name);
      // Assert
      expect(returnedMessage).toBe(checkOutput);
    });
    it('should trim the input before a string', () => {
      // Arrange
      name = ` ${name}`;
      checkOutput = checkOutput.trim();
      // Act
      const returnedMessage = Greeting(name);
      // Assert
      expect(returnedMessage).toBe(checkOutput);
    });
    it('should trim the input after a string', () => {
      // Arrange
      name += ' ';
      checkOutput = checkOutput.trim();
      // Act
      const returnedMessage = Greeting(name);
      // Assert
      expect(returnedMessage).toBe(checkOutput);
    });
    it('should capitalize the first letter of the name', () => {
      // Arrange
      name = 'william';
      checkOutput = checkOutput.charAt(0).toUpperCase() + checkOutput.slice(1);
      // Act
      const returnedMessage = Greeting(name);
      // Assert
      expect(returnedMessage).toBe(checkOutput);
    });
    it('should return Good morning when the time is 6:02', () => {
      // Arrange
      MockDate.set(new Date(2019, 9, 29, 6, 2));
      checkOutput = `Good morning ${name}`;
      // Act
      const returnedMessage = Greeting(name);
      // Assert
      expect(returnedMessage).toBe(checkOutput);
    });
    it('should return Good morning when the time is 11:59', () => {
      // Arrange
      MockDate.set(new Date(2019, 9, 29, 11, 59));
      checkOutput = `Good morning ${name}`;
      // Act
      const returnedMessage = Greeting(name);
      // Assert
      expect(returnedMessage).toBe(checkOutput);
    });
    it('should return Good evening when the time is 18:35', () => {
      // Arrange
      MockDate.set(new Date(2019, 9, 29, 18, 35));
      checkOutput = `Good evening ${name}`;
      // Act
      const returnedMessage = Greeting(name);
      // Assert
      expect(returnedMessage).toBe(checkOutput);
    });
    it('should return Good evening when the time is 21:58', () => {
      // Arrange
      MockDate.set(new Date(2019, 9, 29, 21, 58));
      checkOutput = `Good evening ${name}`;
      // Act
      const returnedMessage = Greeting(name);
      // Assert
      expect(returnedMessage).toBe(checkOutput);
    });
    it('should return good night when the time is 22:00', () => {
      // Arrange
      MockDate.set(new Date(2019, 9, 29, 22, 0));
      checkOutput = `Good night ${name}`;
      // Act
      const returnedMessage = Greeting(name);
      // Assert
      expect(returnedMessage).toBe(checkOutput);
    });
    it('should return good night when the time is 03:45', () => {
      // Arrange
      MockDate.set(new Date(2019, 9, 29, 3, 45));
      checkOutput = `Good night ${name}`;
      // Act
      const returnedMessage = Greeting(name);
      // Assert
      expect(returnedMessage).toBe(checkOutput);
    });
  });
});
