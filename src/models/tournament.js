"use strict";
/**
 * Created by Admin on 24.01.2017.
 */
var Team = (function () {
  function Team(Id, Name, Date, Games, Countdown) {
    if (Id === void 0) {
      Id = 0;
    }
    if (Name === void 0) {
      Name = '';
    }
    if (Date === void 0) {
      Date = '';
    }
    if (Games === void 0) {
      Games = [];
    }
    if (Countdown === void 0) {
      Countdown = 0;
    }
    this.Id = Id;
    this.Name = Name;
    this.Date = Date;
    this.Games = Games;
    this.Countdown = Countdown;
  }

  return Team;
}());
exports.Team = Team;
//# sourceMappingURL=tournament.js.map
