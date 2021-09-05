import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionRoutingModule } from './competition-routing.module';
import { CompetitionComponent } from './competition.component';
import { ListComponent } from './list/list.component';
import { TeamListComponent } from './team-list/team-list.component';
import { MatchListComponent } from './match-list/match-list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    CompetitionComponent,
    ListComponent,
    TeamListComponent,
    MatchListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CompetitionRoutingModule
  ]
})
export class CompetitionModule { }
