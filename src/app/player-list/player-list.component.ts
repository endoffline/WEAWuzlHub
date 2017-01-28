import { Component, Input } from '@angular/core';
import {Player} from "../../models/player";
import { PlayerService } from '../player.service';
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})

export class PlayerListComponent implements OnInit {

  players: Player[] = [new Player()];
  selectedPlayer: Player = new Player();

  constructor(private playerService: PlayerService) { }

  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.players = players);
  }

  ngOnInit():void {
    this.getPlayers();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

}


