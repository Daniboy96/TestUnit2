const { soma, subtracao, multiplicacao, divisao } = require('./calculadora');

// Funções de teste do Jest
test('Teste de soma', () => {
  expect(soma(2, 3)).toBe(5);
});

test('Teste de subtração', () => {
  expect(subtracao(5, 2)).toBe(3);
});

test('Teste de multiplicação', () => {
  expect(multiplicacao(4, 5)).toBe(20);
});

// test('Teste de divisão', () => {
//   expect(divisao(10, 2)).toBe(5);
// });