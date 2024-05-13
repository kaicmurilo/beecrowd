var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function produto(A, B){
    return "PROD = " + (A * B);
}

var A = parseInt(lines[0], 10);
var B = parseInt(lines[1], 10);

console.log(produto(A, B))