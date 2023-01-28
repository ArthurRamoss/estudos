const entrada1 = prompt("digite o primeiro numero");
const entrada2 = prompt("digite o segundo numero");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const substracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Calculo completo!\n" +
    "\nsoma:" +
    soma +
    "\nsubtração: " +
    substracao +
    "\nMultiplicação:" +
    multiplicacao +
    "\ndivisão: " +
    divisao
);
