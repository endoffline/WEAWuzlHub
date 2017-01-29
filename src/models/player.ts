import {RatingHistory} from "./ratinghistory";

export class Player {
  constructor(public Id: number = 0,
              public IsAdmin: boolean = false,
              public FirstName: string = '',
              public LastName: string = '',
              public NickName: string = '',
              public Email: string = '',
              public Password: string = '',
              public ProfileImage: string = '',
              public Rating: RatingHistory = new RatingHistory(),
              public Monday: boolean = false,
              public Tuesday: boolean = false,
              public Wednesday: boolean = false,
              public Thursday: boolean = false,
              public Friday: boolean = false,
              public Saturday: boolean = false,
              public Sunday: boolean = false) {
  }
}
