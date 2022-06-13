import { classifyStudent1, classifyStudent2, classifyStudent3 } from './05-09-main';

// v1
describe('classifyStudent1()', () => {
  test('should return Invalid mark! when n < 0', () => {
    const value = classifyStudent1(-1);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Invalid mark! when n > 10', () => {
    const value = classifyStudent1(11);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Excellence when n > 8', () => {
    // const value = classifyStudent1(9);
    expect(classifyStudent1(9)).toBe('Excellence');
    expect(classifyStudent1(10)).toBe('Excellence');
  });

  test('should return Good when n in [7-8]', () => {
    // const value = classifyStudent1(7.5);
    expect(classifyStudent1(7)).toBe('Good');
    expect(classifyStudent1(8)).toBe('Good');
  });

  test('should return Not Good when n in [4-6]', () => {
    // const value = classifyStudent1(5);
    [4, 5, 6].forEach((n) => {
      expect(classifyStudent1(n)).toBe('Not Good');
    });
  });

  test('should return Bad when n in [1-3]', () => {
    [1, 2, 3].forEach((n) => {
      expect(classifyStudent1(n)).toBe('Bad');
    });
  });
});

// v2
describe('classifyStudent2()', () => {
  test('should return Invalid mark! when n < 0', () => {
    const value = classifyStudent2(-1);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Invalid mark! when n > 10', () => {
    const value = classifyStudent2(11);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Excellence when n > 8', () => {
    // const value = classifyStudent2(9);
    expect(classifyStudent2(9)).toBe('Excellence');
    expect(classifyStudent2(10)).toBe('Excellence');
  });

  test('should return Good when n in [7-8]', () => {
    // const value = classifyStudent2(7.5);
    expect(classifyStudent2(7)).toBe('Good');
    expect(classifyStudent2(8)).toBe('Good');
  });

  test('should return Not Good when n in [4-6]', () => {
    // const value = classifyStudent2(5);
    [4, 5, 6].forEach((n) => {
      expect(classifyStudent2(n)).toBe('Not Good');
    });
  });

  test('should return Bad when n in [1-3]', () => {
    [1, 2, 3].forEach((n) => {
      expect(classifyStudent2(n)).toBe('Bad');
    });
  });
});

// v3
describe('classifyStudent3()', () => {
  test('should return Invalid mark! when n < 0', () => {
    const value = classifyStudent3(-1);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Invalid mark! when n > 10', () => {
    const value = classifyStudent3(11);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Excellence when n > 8', () => {
    // const value = classifyStudent3(9);
    expect(classifyStudent3(9)).toBe('Excellence');
    expect(classifyStudent3(10)).toBe('Excellence');
  });

  test('should return Good when n in [7-8]', () => {
    // const value = classifyStudent3(7.5);
    expect(classifyStudent3(7)).toBe('Good');
    expect(classifyStudent3(8)).toBe('Good');
  });

  test('should return Not Good when n in [4-6]', () => {
    // const value = classifyStudent3(5);
    [4, 5, 6].forEach((n) => {
      expect(classifyStudent3(n)).toBe('Not Good');
    });
  });

  test('should return Bad when n in [1-3]', () => {
    [1, 2, 3].forEach((n) => {
      expect(classifyStudent3(n)).toBe('Bad');
    });
  });
});
