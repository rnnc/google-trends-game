module.exports = class Game {

  constructor(team1Name, team2Name, gameTerms) {
    this.team1 = new Player(team1Name, "red");
    this.team2 = new Player(team2Name, "blue");

    this.gameTerms = new Set(gameTerms);

    this.scoreSheet = new Map()

  }




}

class Player {
  constructor(name, color) {
    this.score = 0;
    this.name = name;
    this.color = color;

  }

  incrementScore(points) {
    this.score = this.score + points;
  }



  get playerData() {
    return {
      name: this.name,
      score: this.score,
      color: this.color
    }
  }
}