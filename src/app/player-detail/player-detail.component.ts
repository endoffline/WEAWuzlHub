import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

import {PlayerService} from '../services/player.service';

import {Player} from "../../models/player";

@Component({
  moduleId: module.id,
  selector: 'player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})

export class PlayerDetailComponent implements OnInit {

  constructor(private playerService: PlayerService,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
  }


  player: Player;
  playerfg: FormGroup;

  ngOnInit(): void {
    this.playerfg = this.formBuilder.group({
      FirstName: ['', [Validators.required]],
      NickName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      Password: [''],
      IsAdmin: ['', [Validators.required]],
      ProfileImage: [''],
      Monday: [''],
      Tuesday: [''],
      Wednesday: [''],
      Thursday: [''],
      Friday: [''],
      Saturday: [''],
      Sunday: [''],
    });

    this.route.params
      .switchMap((params: Params) => this.playerService.getPlayer(+params['id']))
      .subscribe(player => {
        this.player = player;
        this.playerfg.patchValue(player);
      });


  }

  onSubmit({value, valid}: { value: Player, valid: boolean }) {
    console.log(value, valid);
  }

  goBack(): void {
    this.location.back();
  }

}
