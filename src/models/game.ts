import {Team} from "./Team";

export class Game {
  constructor(public Id: number = 0,
              public Team1: Team = new Team(),
              public Team2: Team = new Team(),
              public Date: string = '',
              public NickName: string = '',
              public Score1: number = 0,
              public Score2: number = 0) {
  }
}
