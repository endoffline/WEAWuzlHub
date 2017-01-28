"use strict";
var player_1 = require("./player");
/**
 * Created by Admin on 24.01.2017.
 */
var Team = (function () {
  function Team(Id, Player1, Player2, Name, Rating) {
    if (Id === void 0) {
      Id = 0;
    }
    if (Player1 === void 0) {
      Player1 = new player_1.Player();
    }
    if (Player2 === void 0) {
      Player2 = new player_1.Player();
    }
    if (Name === void 0) {
      Name = '';
    }
    if (Rating === void 0) {
      Rating = 0;
    }
    this.Id = Id;
    this.Player1 = Player1;
    this.Player2 = Player2;
    this.Name = Name;
    this.Rating = Rating;
  }

  return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.js.map
