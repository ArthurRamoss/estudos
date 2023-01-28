const atacante = prompt("Qual é nome do personagem atacante?");
const PoderDeAtaque = prompt("Qual é o seu poder de ataque?");

const defensor = prompt("Qual é nome do personagem defensor?");
let pontosDeVida = prompt("Quantos pontos de vida ele possui?");
const PoderDeDefesa = prompt("Qual é o seu poder de defesa?");
const Escudo = confirm("ele tem um escudo?");
const EscudoTexto = Escudo ? "Sim" : "Não";

let DanoCausado = 0;

if (PoderDeAtaque > PoderDeDefesa && Escudo == false) {
  DanoCausado = +(PoderDeAtaque - PoderDeDefesa);
} else if (PoderDeAtaque > PoderDeAtaque && Escudo == true);
{
  DanoCausado = +PoderDeAtaque - PoderDeDefesa / 2;
}

pontosDeVida = pontosDeVida - DanoCausado;

alert(atacante + " causou " + DanoCausado + " pontos de dano em " + defensor);
alert(
  atacante +
    "\nPoder de ataque: " +
    PoderDeAtaque +
    "\n\n" +
    defensor +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    PoderDeDefesa +
    "\nPossui escudo: " +
    EscudoTexto
);
