'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
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
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3.

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `vicotry${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
/*
const [players1, players2] = game.players;
console.log(
  'Players= ',
  '[Players 1: ',
  players1,
  '], [Players 2:',
  players2,
  ']'
);

const [gk, ...fieldPlayers] = players1;
console.log('Fileds: ', gk, fieldPlayers);

const allPlayers = [...players1, players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log('Team 1:', team1, ',Draw:', draw, ',Team2:', team2);

const printGoals = function (...players) {
  console.log('------------pringt Goals------------');

  console.log('Players: ', players);

  console.log(`In this game ${players.length} goals were scored.`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.score);

team1 < team2 && console.log('Team 1 is more likely to win..!');
team2 < team1 && console.log('Team 2 is more likely to win..!');
*/
