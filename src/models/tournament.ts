import {Game} from "./game";

export class Tournament {
  constructor(public Id: number = 0,
              public Name: string = '',
              public Date: string = '',
              public Games: Game[] = [],
              public Countdown: number = 0) {
  }
}
