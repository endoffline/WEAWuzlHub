import {Component} from '@angular/core';
import {Player} from "../../models/player";
import {RankingService} from '../services/ranking.service';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {RatingHistory} from "../../models/ratinghistory";

@Component({
  moduleId: module.id,
  selector: 'ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})

export class RankingListComponent implements OnInit {

  players: Player[] = [new Player()];
  selectedPlayer: Player = new Player();
  ratingHistories: RatingHistory[][];
  public lineChartType: string = 'line';
  public lineChartData: Array<any> = [];
  public finalLineChartData: Array<any> = [
    {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], label: 'up'},
    {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], label: 'up'},
    {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], label: 'up'},
    {data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], label: 'up'},
    {data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'], label: 'down'}
  ];
  public lineChartLegends: string[] = [];
  public lineChartLabels: Array<any> = [

  ]; //= ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public finalLineChartLabels: Array<any> = [
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',
    '','','','','','','','','','',];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend:boolean = true;

  error: string;
  playerIteration: number = 0;

  playersRatings: number[][];
  playersDates: string[][];
  constructor(private rankingService: RankingService) {

  }

  getRanking(): void {
    this.rankingService.getRanking().subscribe(players => {
      this.players = players;
      this.ratingHistories = [];
      this.playersRatings = [];
      this.playersDates = [];
      var dateFlags = [];

      for (var i = 0; i < 5; i++) {
        this.lineChartLegends.push(this.players[i].NickName);
        this.rankingService.getRatingHistoryForPlayer(this.players[i].Id)
          .subscribe(ratings => {
            let tempratings = [];
            let tempdates = [];
            this.ratingHistories[i] = ratings;

            for (let rating of this.ratingHistories[i]) {
              tempratings.push(rating.Rating);
              tempdates.push(rating.Date);
              if (dateFlags[rating.Date]) continue;
              dateFlags[rating.Date] = true;
              this.lineChartLabels.push(rating.Date);
            }
            this.playersRatings.push(tempratings);
            this.playersDates.push(tempdates);

            this.playerIteration++;
          }, err => this.error = err, () => this.processRatingHistories());


      }
      /*function sortByDate(a, b) {
        return +new Date(a) - +new Date(b);
      }
      labels.sort(sortByDate);*/
      /*var arr = this.lineChartLabels.sort(function(a, b) {
        return a - b;
      });*/
      /*function sortByDate( obj1, obj2 ) {
        var date1 = (new Date()).setISO8601(obj1);
        var date2 = (new Date()).setISO8601(obj2);
        return date2 > date1 ? 1 : -1;
      }
      this.lineChartLabels.sort(sortByDate);*/
      //console.log(labels[0]);
      //console.log(labels.sort(sortByDate));

      //console.log(this.lineChartData);
    });
  }

  getRating(): void {

  }

  ngOnInit(): void {
    this.getRanking();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  sortByDate(a, b) {
    return +new Date(a) - +new Date(b);
  }
  processRatingHistories() : void {
    if (this.playerIteration == 5) {
      let arr = [];
      this.lineChartLabels.sort(function (a, b) {
        return +new Date(a) - +new Date(b);
      });

      console.log(this.playersDates);
      console.log(this.playersRatings);
      let clone = JSON.parse(JSON.stringify(this.finalLineChartData));
      for (let i = 0; i < this.playersDates.length; i++) {
        let data = [];
        let prevIndex = -1;
        for (let j = 0; j < this.lineChartLabels.length; j++) {
          let index = this.playersDates[i].indexOf(this.lineChartLabels[j]);
          if (index > -1) {
            data[j] = this.playersRatings[i][index];
          } else {
            if (prevIndex > -1) {
              data[j] = this.playersRatings[i][prevIndex];
            } else {
              data[j] = 0;
            }
          }
          if (index > -1) {
            prevIndex = index;
          }
        }


        /*for (let label of this.lineChartLabels) {
          let index = this.playersDates[i].indexOf(label);
          //console.log("index: " + index);
          if (index > -1) {
            data[label] = this.playersRatings[i][index];
          } else {
            if (prevIndex > -1) {
              data[label] = this.playersRatings[i][prevIndex];
            } else {
              data[label] = 0;
            }
          }
          if (index > -1) {
            prevIndex = index;
          }
        }*/
        this.lineChartData.push(data);
        /*arr = [];
        for (let j = 0; j < 10; j++) {
          arr[j] = this.lineChartData[i][j];
        }*/

        clone[i].data = this.lineChartData[i].slice(1).slice(-50);
        clone[i].label = this.lineChartLegends[i];
        this.finalLineChartData = clone;
      }
      //let cloneLabels = JSON.parse(JSON.stringify(this.finalLineChartLabels));
      //cloneLabels = this.lineChartLabels.slice(1).slice(-20);
      //this.finalLineChartLabels = cloneLabels;
      this.finalLineChartData = clone;
      //for (let j = 0; j < 10; j++) {

      //}
      console.log(this.lineChartLabels);
      console.log(this.lineChartData);
      console.log(this.finalLineChartData);
      console.log(this.finalLineChartLabels);
    }
  }

}
