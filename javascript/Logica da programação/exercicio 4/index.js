const Nome = prompt("qual é seu nome?");
let cidades = [];
let NumCidades = 0;

let Visitar = confirm("você ja visitou uma cidade?");
while (Visitar == true) {
  cidades = prompt("qual o nome da cidade?");
  cidades += " -" + cidades + "\n";
  NumCidades += 1;
  Visitar = confirm("você visitou outra cidade?");
}

prompt(
  "nome" +
    Nome +
    "\nNumero de cidades visitadas " +
    NumCidades +
    "\nNome das cidades visitadas" +
    cidades
);
