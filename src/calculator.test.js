
const {sum, subtraction, multiplication, division, percentage, potentiation, division2, percentage2, potentiation2} = require('./calculator.js') ;


test('Sum Validation', () => {
    expect(sum(2,3)).toBe(5);
    expect(sum(-5, -2)).toBe(-7)
}) ;

test('Subtraction Validation', () => {
  expect(subtraction(8,4)).toBe(4);
  expect(subtraction(-12, -10)).toBe(-2)
}) ;

test('Multiplication Validation', () => {
  expect(multiplication(16,2)).toBe(32);
  expect(multiplication(23, 0)).toBe(0)
}) ;

test('Division Validation', () => {
  expect(division(8,4)).toBe(2);
  expect(division(12, 1)).toBe(12)
}) ;

test('Percentage Validation', () => {
  expect(percentage(10,100)).toBe(10);
}) ;

test('Potentiation Validation', () => {
  expect(potentiation(2, 3)).toBe(8);
}) ;

test('Division2 Validation', () => {
  expect(division2(9, 3)).toBe(3);
});

test('Percentage2 Validation', () => {
  expect(percentage2(100, 50)).toBe(50);
});

test('Potentiation2 Validation', () => {
  expect(potentiation2(2, 4)).toBe(16);
});