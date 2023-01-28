let dinheiro = Number(prompt("Qual é a quantidade inicial de dinheiro?"));
let encerrar = false;

do {
  var input = prompt(
    "escolha alguma das opçoes \n1)Adicionar dinheiro \n2)Remover dinheiro \n3)encerrar"
  );
  switch (input) {
    case "1":
      dinheiro += Number(prompt("quando dinheiro deseja adicionar?"));
      break;
    case "2":
      dinheiro -= Number(prompt("quanto dinheiro deseja remover?"));
      break;
    case "3":
      encerrar = true;
      break;
  }
} while (encerrar == false);
alert("Dinheiro final: " + dinheiro);
