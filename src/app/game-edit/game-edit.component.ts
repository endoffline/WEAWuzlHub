import {Component, Input} from '@angular/core';
import {OnInit} from '@angular/core';
import {Game} from "../../models/game";
import {GameService} from "../services/game.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location}                 from '@angular/common';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./../game-detail/game-detail.component.css']
})

export class GameEditComponent implements OnInit {

  @Input()
  game: Game;
  gamefg: FormGroup;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.gamefg = this.formBuilder.group({
      Score1: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      Score2: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });

    this.route.params
      .switchMap((params: Params) => this.gameService.getGame(+params['id']))
      .subscribe(game => {
        this.game = game;
        this.gamefg.patchValue(game);
      });
  }

  onSubmit({value, valid}: { value: Game, valid: boolean }) {
    value.Id = this.game.Id;
    value.Team1 = this.game.Team1;
    value.Team2 = this.game.Team2;
    value.Date = this.game.Date;
    console.log(value, valid);
    this.gameService.updateGame(value)
      .subscribe(success => {

      });
    this.router.navigate(['/live']);
  }

  goBack(): void {
    this.location.back();
  }
}
/*, Validators.pattern(/^\d+$/)*/
