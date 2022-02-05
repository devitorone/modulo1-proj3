var prompt = require('prompt-sync')();

var rounds = +prompt('Quantas rodadas? ');
console.log('');
var playerNumber = +prompt('Quantos jogadores vão jogar? ');
var players = [];

for (let i=0;i<playerNumber; i++){
    let nome = prompt(`Qual o nome do jogador ${i+1}?`)
    players.push({nome});
    players[i].jogada = []

}
for (let j=0;j<rounds;j++){
    for (let i=0;i<players.length;i++){
        let p1 = prompt(`Jogar dado jogador ${i+1} ?`);
        let dado = Math.ceil(Math.random()*6);
        console.log('dado', dado);
        players[i].jogada.push(dado)
    }
    console.log('Póxima rodada');
}
//console.log(vitor);
console.log(players);
/*
const jogador = {
    nome:,
    dados: [],

}
*/
//function jg(player){
//    players.push({player});
//}