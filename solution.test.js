// Import student's solution
const studentSolution = require('./solution');

describe('Assignment Tests', () => {
  // Each test counts as one point
  test('Test case 1: add 5 and 3 to equal 8', () => {
    expect(studentSolution.add(5, 3)).toBe(8);
  });

  test('Test case 2: add 10 and 15 to equal 25', () => {
    expect(studentSolution.add(10, 15)).toBe(25);
  });

  test('Test case 3: add -5 and 5 to equal 0', () => {
    expect(studentSolution.add(-5, 5)).toBe(0);
  });

  test('Test case 4: add 0 and 0 to equal 0', () => {
    expect(studentSolution.add(0, 0)).toBe(0);
  });

  test('Test case 5: add 999 and 1 to equal 1000', () => {
    expect(studentSolution.add(999, 1)).toBe(1000);
  });

  test('Test case 6: add -10 and -20 to equal -30', () => {
    expect(studentSolution.add(-10, -20)).toBe(-30);
  });

  test('Test case 7: handle decimal addition correctly', () => {
    expect(studentSolution.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('Test case 8: add large numbers correctly', () => {
    expect(studentSolution.add(9999, 9999)).toBe(19998);
  });

  test('Test case 9: add one negative and one positive number', () => {
    expect(studentSolution.add(-100, 50)).toBe(-50);
  });

  test('Test case 10: handle string conversion', () => {
    expect(studentSolution.add("5", "5")).toBe(10);
  });

  // Add more test cases as needed
});