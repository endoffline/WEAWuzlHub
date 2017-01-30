import {Component, Input} from '@angular/core';
import {OnInit} from '@angular/core';
import {Game} from "../../models/game";

@Component({
  moduleId: module.id,
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})

export class GamesDetailComponent {

  @Input()
  game: Game;

}


