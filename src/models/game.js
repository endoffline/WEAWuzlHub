"use strict";
var Team_1 = require("./Team");
/**
 * Created by Admin on 24.01.2017.
 */
var Game = (function () {
  function Game(Id, Team1, Team2, Date, NickName, Score1, Score2) {
    if (Id === void 0) {
      Id = 0;
    }
    if (Team1 === void 0) {
      Team1 = new Team_1.Team();
    }
    if (Team2 === void 0) {
      Team2 = new Team_1.Team();
    }
    if (Date === void 0) {
      Date = '';
    }
    if (NickName === void 0) {
      NickName = '';
    }
    if (Score1 === void 0) {
      Score1 = 0;
    }
    if (Score2 === void 0) {
      Score2 = 0;
    }
    this.Id = Id;
    this.Team1 = Team1;
    this.Team2 = Team2;
    this.Date = Date;
    this.NickName = NickName;
    this.Score1 = Score1;
    this.Score2 = Score2;
  }

  return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map
