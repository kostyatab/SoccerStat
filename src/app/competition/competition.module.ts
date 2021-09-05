import { NgModule } from '@angular/core';

import { CompetitionRoutingModule } from './competition-routing.module';
import { CompetitionComponent } from './competition.component';
import { ListComponent } from './list/list.component';
import { TeamListComponent } from './team-list/team-list.component';
import { MatchListComponent } from './match-list/match-list.component';
import { AppCommonModule } from '../common/app-common.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        CompetitionComponent,
        ListComponent,
        TeamListComponent,
        MatchListComponent
    ],
  imports: [
    CompetitionRoutingModule,
    CommonModule,
    AppCommonModule
  ]
})
export class CompetitionModule { }
