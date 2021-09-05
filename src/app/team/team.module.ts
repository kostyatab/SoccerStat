import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { MatchListComponent } from './match-list/match-list.component';
import { CompetitionModule } from '../competition/competition.module';
import { AppCommonModule } from '../common/app-common.module';


@NgModule({
  declarations: [
    TeamComponent,
    MatchListComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    CompetitionModule,
    AppCommonModule
  ]
})
export class TeamModule { }
