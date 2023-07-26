import { fizzbuzz } from '../fizzbuzz';

describe('Test Sum Function', () => {
  test('Should print 1 if they receive 1', () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  });

  test('Should print fizz if they receive 3', () => {
    const expected = 'fizz';
    const result = fizzbuzz(3);
    expect(expected).toBe(result);
  });

  test('Should print fizz if they receive a multiple of 3', () => {
    const expected = 'fizz';
    const result = fizzbuzz(6);
    expect(expected).toBe(result);
  });

  test('Should print buzz if they receive 5', () => {
    const expected = 'buzz';
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
  });

  test('Should print buzz if they receive a multiple of 5', () => {
    const expected = 'buzz';
    const result = fizzbuzz(10);
    expect(expected).toBe(result);
  });

  test('Should print fizzbuzz if they receive a multiple of 3 and 5', () => {
    const expected = 'fizzbuzz';
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
  });
});
