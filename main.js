const team = {

  _players: [
    {
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11},      

    {
      firstName: 'Peter',
      lastName: 'Petigrew',
      age: 34},      

    {
      firstName: 'Erik',
      lastName: 'Summers',
      age: 30
    },

    ],
  
  _games: [

    {
    opponent: 'Twins',
    teamPoints: 52,
    opponentPoints: 12

    },
    
    {
    opponent: 'Vikings',
    teamPoints: 25,
    opponentPoints: 2

    },
    
    {
    opponent: 'Bulls',
    teamPoints: 22,
    opponentPoints: 1
    },

  ],
  
  get players () {
    return this._players;
  },

  get games() {
    return this._games;
  },
  
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    
    this._players.push(player);
    // return this._players[players].push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentPoints: opponentPoints
    };
    this._games.push(game);
    },

};

team.addPlayer('Steph','Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Outlaws', 1, 3);
team.addGame('Gladiators', 3, 1);
team.addGame('Mayhem', 3, 0);

console.log(team.players);
console.log(team.games);
