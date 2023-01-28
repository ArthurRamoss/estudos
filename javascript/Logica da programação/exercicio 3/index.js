const x = parseFloat(prompt("Insira o valor em metros:"));
const y = prompt(
  "Escolha a unidade de medida para conversão: \n1) Milímetros \n2) Centímetros \n3) Decímetros \n4) Decâmetros \n5) Hectômetros \n6) Quilômetros"
);

switch (y) {
  case "1":
    alert(x + " metros = " + x * 1000 + " milímetros.");
    break;
  case "2":
    alert(x + " metros = " + x * 100 + " centímetros.");
    break;
  case "3":
    alert(x + " metros = " + x * 10 + " decímetros.");
    break;
  case "4":
    alert(x + " metros = " + x / 10 + " decâmetros.");
    break;
  case "5":
    alert(x + " metros = " + x / 100 + " hectômetros.");
    break;
  case "6":
    alert(x + " metros = " + x / 1000 + " quilômetros.");
    break;
  default:
    alert("Opção inválida!");
}
