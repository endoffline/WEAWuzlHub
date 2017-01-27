import {Player} from "./player";
/**
 * Created by Admin on 24.01.2017.
 */
export class Team {
  constructor(public Id: number = 0,
              public Player1: Player = new Player(),
              public Player2: Player = new Player(),
              public Name: string = '',
              public Rating: number = 0) {
  }
}
