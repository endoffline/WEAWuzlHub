import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PlayerService } from '../player.service';

import {Player} from "../../models/player";

@Component({
  moduleId: module.id,
  selector: 'player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})

export class PlayerDetailComponent implements OnInit {

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


  @Input() player: Player;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.playerService.getPlayer(+params['id']))
      .subscribe(player => this.player = player);
  }

  goBack(): void {
    this.location.back();
  }

}
