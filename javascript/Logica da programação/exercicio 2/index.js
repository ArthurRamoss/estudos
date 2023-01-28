const velocidade1 = prompt("Velocidade carro 1");
const velocidade2 = prompt("Velocidade carro 2");

if (velocidade1 > velocidade2) {
  alert("Velocidade 1 é maior que a velocidade 2");
} else if (velocidade2 > velocidade1) {
  alert("Velocidade 2 é maior que Velocidade 1");
} else {
  alert("eles tem a mesma velocidade");
}
