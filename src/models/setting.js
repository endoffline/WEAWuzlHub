"use strict";
/**
 * Created by Admin on 24.01.2017.
 */
var Setting = (function () {
  function Setting(Id, Label, Value) {
    if (Id === void 0) {
      Id = 0;
    }
    if (Label === void 0) {
      Label = '';
    }
    if (Value === void 0) {
      Value = '';
    }
    this.Id = Id;
    this.Label = Label;
    this.Value = Value;
  }

  return Setting;
}());
exports.Setting = Setting;
//# sourceMappingURL=setting.js.map
