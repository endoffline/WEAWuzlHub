import {NgModule}               from '@angular/core';
import {RouterModule, Routes}   from '@angular/router';

import {PlayerListComponent}    from "./player-list/player-list.component";
import {PlayerDetailComponent}  from "./player-detail/player-detail.component";
import {RankingListComponent}   from "./ranking-list/ranking-list.component";

const routes: Routes = [
  {
    path: 'players',
    component: PlayerListComponent
  },
  {
    path: 'detail/:id',
    component: PlayerDetailComponent
  },
  {
    path: 'ranking',
    component: RankingListComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


