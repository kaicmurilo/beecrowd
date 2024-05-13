var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

function soma(A, B) {
  return "SOMA = " + (A + B);
}

var A = parseInt(lines[0], 10);
var B = parseInt(lines[1], 10);

console.log(soma(A, B));
