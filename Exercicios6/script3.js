const game = {
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};

// a. Recorre o array game.scored e mostra por pantalla información do xogador
// que marcou e o número de gol marcado. Exemplo: “Gol 1: Lewandowski”.

let numGoles = 1;

for (const element of game.scored) {
  console.log(`Gol ${numGoles} de ${element}`);
  numGoles++;
}

// b. Crea un novo obxecto chamado scorers que conteña como propiedades o
// nome dos xogadores que marcaron e como valor o número de goles que
// marcaron respectivamente. Neste exemplo sería algo así: {Lewandowski: 2,
// Gnarby: 1, Hummels: 1}
let scorers = {};

for (const xogador of game.scored) {
  if (!Object.hasOwn(scorers, xogador)) {
    scorers[xogador] = 1;
  } else {
    scorers[xogador]++;
  }
}
console.log(scorers);
