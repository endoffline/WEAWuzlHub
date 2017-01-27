"use strict";
/**
 * Created by Admin on 24.01.2017.
 */
var RatingHistory = (function () {
  function RatingHistory(Id, PlayerId, Date, Rating) {
    if (Id === void 0) {
      Id = 0;
    }
    if (PlayerId === void 0) {
      PlayerId = 0;
    }
    if (Date === void 0) {
      Date = '';
    }
    if (Rating === void 0) {
      Rating = 0;
    }
    this.Id = Id;
    this.PlayerId = PlayerId;
    this.Date = Date;
    this.Rating = Rating;
  }

  return RatingHistory;
}());
exports.RatingHistory = RatingHistory;
//# sourceMappingURL=ratinghistory.js.map
