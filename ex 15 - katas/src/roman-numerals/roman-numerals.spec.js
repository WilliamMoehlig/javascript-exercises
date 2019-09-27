import { arabicToRoman } from './roman-numerals';

describe('roman-numerals', () => {
  describe('arabicToRoman', () => {
    it('should convert 1 to I', () => {
      // Arrange
      const arabic = 1;
      // Act
      const roman = arabicToRoman(arabic);
      // Assert
      expect(roman).toBe('I');
    });
    it('should convert 2 to II', () => {
      // Arrange
      const arabic = 2;
      // Act
      const roman = arabicToRoman(arabic);
      // Assert
      expect(roman).toBe('II');
    });
  });
  describe('romanToArabic', () => {});
});
