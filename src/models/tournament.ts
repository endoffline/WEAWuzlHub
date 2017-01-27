import {Player} from "./player";
import {Game} from "./game";
/**
 * Created by Admin on 24.01.2017.
 */
export class Team {
  constructor(public Id: number = 0,
              public Name: string = '',
              public Date: string = '',
              public Games: Game[] = [],
              public Countdown: number = 0) {
  }
}
