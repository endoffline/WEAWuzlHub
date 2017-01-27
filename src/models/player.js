"use strict";
var ratinghistory_1 = require("./ratinghistory");
/**
 * Created by Admin on 24.01.2017.
 */
var Player = (function () {
  function Player(Id, IsAdmin, FirstName, LastName, NickName, EMail, Password, ProfileImage, Rating, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) {
    if (Id === void 0) {
      Id = 0;
    }
    if (IsAdmin === void 0) {
      IsAdmin = false;
    }
    if (FirstName === void 0) {
      FirstName = '';
    }
    if (LastName === void 0) {
      LastName = '';
    }
    if (NickName === void 0) {
      NickName = '';
    }
    if (EMail === void 0) {
      EMail = '';
    }
    if (Password === void 0) {
      Password = '';
    }
    if (ProfileImage === void 0) {
      ProfileImage = '';
    }
    if (Rating === void 0) {
      Rating = new ratinghistory_1.RatingHistory();
    }
    if (Monday === void 0) {
      Monday = false;
    }
    if (Tuesday === void 0) {
      Tuesday = false;
    }
    if (Wednesday === void 0) {
      Wednesday = false;
    }
    if (Thursday === void 0) {
      Thursday = false;
    }
    if (Friday === void 0) {
      Friday = false;
    }
    if (Saturday === void 0) {
      Saturday = false;
    }
    if (Sunday === void 0) {
      Sunday = false;
    }
    this.Id = Id;
    this.IsAdmin = IsAdmin;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.NickName = NickName;
    this.EMail = EMail;
    this.Password = Password;
    this.ProfileImage = ProfileImage;
    this.Rating = Rating;
    this.Monday = Monday;
    this.Tuesday = Tuesday;
    this.Wednesday = Wednesday;
    this.Thursday = Thursday;
    this.Friday = Friday;
    this.Saturday = Saturday;
    this.Sunday = Sunday;
  }

  return Player;
}());
exports.Player = Player;
//# sourceMappingURL=player.js.map
