import { checkIfAllEvenV1, checkIfAllEvenV2 } from './09-07-check-exist';

//v1
describe('checkIfAllEvenV1', () => {
  test('should return false when not an array', () => {
    expect(checkIfAllEvenV1(1)).toBe(false);
    expect(checkIfAllEvenV1('')).toBe(false);
    expect(checkIfAllEvenV1({})).toBe(false);
    expect(checkIfAllEvenV1(null)).toBe(false);
    expect(checkIfAllEvenV1(undefined)).toBe(false);
  });
  test('should return false when array is empty', () => {
    expect(checkIfAllEvenV1([])).toBe(false);
  });
  test('should return false when has no even number', () => {
    expect(checkIfAllEvenV1([1, 3, 5, 7])).toBe(false);
  });
  test('should return false when array has some even numbers', () => {
    expect(checkIfAllEvenV1([1, 2, 3, 5, 7, 9, 10])).toBe(false);
  });
  test('should return true when array has all even numbers', () => {
    expect(checkIfAllEvenV1([2, 4, 6, 8, 10])).toBe(true);
  });
});

// v2
describe('checkIfAllEvenV2', () => {
  test('should return false when not an array', () => {
    expect(checkIfAllEvenV2(1)).toBe(false);
    expect(checkIfAllEvenV2('')).toBe(false);
    expect(checkIfAllEvenV2({})).toBe(false);
    expect(checkIfAllEvenV2(null)).toBe(false);
    expect(checkIfAllEvenV2(undefined)).toBe(false);
  });
  test('should return false when array is empty', () => {
    expect(checkIfAllEvenV2([])).toBe(false);
  });
  test('should return false when has no even number', () => {
    expect(checkIfAllEvenV2([1, 3, 5, 7])).toBe(false);
  });
  test('should return false when array has some even numbers', () => {
    expect(checkIfAllEvenV2([1, 2, 3, 5, 7, 9, 10])).toBe(false);
  });
  test('should return true when array has all even numbers', () => {
    expect(checkIfAllEvenV2([2, 4, 6, 8, 10])).toBe(true);
  });
});
