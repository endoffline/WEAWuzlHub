import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Params, Router}   from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {PlayerService} from '../services/player.service';

import {Player} from "../../models/player";

@Component({
  moduleId: module.id,
  selector: 'player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./../player-detail/player-detail.component.css']
})

export class PlayerNewComponent implements OnInit {

  constructor(private playerService: PlayerService,
              private route: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder,
              private router: Router) {
  }


  player: Player;
  playerfg: FormGroup;
  message: string;

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

  }

  onSubmit({value, valid}: { value: Player, valid: boolean }) {
    console.log(value, valid);
    this.playerService.createPlayer(value)
      .subscribe(success => {
        if (success) {
          this.message = "Success";
        } else {
          this.message = "Failure";
        }
      });
    this.router.navigate(['/players']);
  }

  goBack(): void {
    this.location.back();
  }

}
