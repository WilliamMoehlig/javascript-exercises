import snail from './snail';

describe('snail', () => {
  it('should resort the alphabetical array', () => {
    // Arrange
    const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    // Act
    const sortedArray = snail(arr);
    // Assert
    expect(sortedArray).toBe([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
  it('should resort the unsorted array', () => {
    // Arrange
    const arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
    // Act
    const sortedArray = snail(arr);
    // Assert
    expect(sortedArray).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
