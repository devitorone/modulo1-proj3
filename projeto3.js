var prompt = require("prompt-sync")();

do {
  var rounds = +prompt("Quantas rodadas? (0-100) => ");
} while (
  rounds == null ||
  rounds < 0 ||
  rounds > 100 ||
  Number.isInteger(rounds) == false
);

console.log("");
do {
  var playerNumber = +prompt("Quantos jogadores vão jogar? ");
} while (Number.isInteger(playerNumber) == false);

var players = [];

for (let i = 0; i < playerNumber; i++) {
  do {
    var nome = prompt(`Qual o nome do jogador ${i + 1}?`);
  } while (nome == null||nome=='');
  players.push({ nome });
  players[i].jogada = [];
  players[i].vitorias = 0;
}
for (let j = 0; j < rounds; j++) {
  let rodada = [];
  for (let i = 0; i < players.length; i++) {
    do{
        var p1 = prompt(`Jogar dado jogador ${i + 1} ?`);
    }while(p1=='n'||p1=='nao'||p1=='not'||p1=='0'||p1=='no');
    let dado = Math.ceil(Math.random() * 6);
    console.log("dado", dado);
    players[i].jogada.push(dado);
    rodada.push(dado);
  }
  rodada.sort((a, b) => {
    return b - a;
  });
  if (rodada[0] != rodada[1]) {
    for (let k = 0; k < players.length; k++) {
      if (players[k].jogada[j] == rodada[0]) {
        players[k].vitorias++;
      }
    }
  }
  console.log(rodada);

  console.log(`
    Póxima rodada
    `);
}
//console.log(vitor);
console.log("Aos resultados");

players.sort((a, b) => {
  return b.vitorias - a.vitorias;
});

//console.log(players);

if (players[0].vitorias != players[1].vitorias) {
  console.log("Ganhador =>", players[0].nome);
} else {
  console.log("Nao houve ganhador.");
}
/*
const jogador = {
    nome:,
    dados: [],

}
*/
//function jg(player){
//    players.push({player});
//}
