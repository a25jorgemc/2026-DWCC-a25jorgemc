// a.Crea as variables players1, players2 que conteñan un array cos xogadores
// de cada equipo.Así, players1 terá os xogadores do primeiro equipo e
// players2 os do segundo equipo.
const players = [
  [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
  ],
  [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
  ],
];
const [players1, players2] = players;

// b.O primeiro xogador do array é o porteiro e o resto son xogadores de campo.
// Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e
// unha variable de tipo array chamada fieldPlayers que conteña o resto de
// xogadores do equipo.

const [gk, ...fieldPlayers] = players1;

//c.Crea un array allPlayers que conteña os xogadores dos dous equipos.
const allplayers = [...players1, ...players2];

//d.O primeiro equipo substituíu os xogadores iniciais por 'Thiago', 'Coutinho',
//'Periscic'.Crea unha nova variable de tipo array chamada players1Final que
// conteña todos os xogadores: os iniciais e tamén os 3 novos.

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
