var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.trim().split(" ");

function calcularDuracaoJogo(horaInicio, minutoInicio, horaFim, minutoFim) {
  let inicioTotalMinutos = horaInicio * 60 + minutoInicio;
  let fimTotalMinutos = horaFim * 60 + minutoFim;

  let duracaoMinutos = fimTotalMinutos - inicioTotalMinutos;

  if (duracaoMinutos <= 0) {
    duracaoMinutos += 24 * 60;
  }

  let horas = Math.floor(duracaoMinutos / 60);
  let minutos = duracaoMinutos % 60;

  return `O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`;
}

hora_inicial = parseInt(lines[0], 10);
minuto_inicial = parseInt(lines[1], 10);
hora_final = parseInt(lines[2], 10);
minuto_final = parseInt(lines[3], 10);

console.log(
  calcularDuracaoJogo(hora_inicial, minuto_inicial, hora_final, minuto_final)
);
