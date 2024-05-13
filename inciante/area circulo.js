var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function calcularAreaCircunferencia(raio) {
  const pi = 3.14159;
  const area = pi * (parseFloat(raio) ** 2);
  return `A=${area.toFixed(4)}`;
}

const resultado = calcularAreaCircunferencia(lines[0]);
console.log(resultado);
