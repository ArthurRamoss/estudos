const PrimeiroNome = prompt("escreva seu primeiro nome");
const Sobrenome = prompt("escreva seu sobrenome");
const CampoDeEstudo = prompt("escreva campo de estudo");
const AnoDeNascimento = prompt("escreva seu ano de nascimento");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    PrimeiroNome +
    " " +
    Sobrenome +
    "\nCampo de estudo: " +
    CampoDeEstudo +
    "\nIdade: " +
    (2023 - AnoDeNascimento)
);
