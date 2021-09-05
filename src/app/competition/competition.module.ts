import { NgModule } from '@angular/core';

import { CompetitionRoutingModule } from './competition-routing.module';
import { CompetitionComponent } from './competition.component';
import { ListComponent } from './list/list.component';
import { TeamListComponent } from './team-list/team-list.component';
import { MatchListComponent } from './match-list/match-list.component';
import { AppCommonModule } from '../common/app-common.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        CompetitionComponent,
        ListComponent,
        TeamListComponent,
        MatchListComponent,
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CompetitionRoutingModule,
        CommonModule,
        AppCommonModule
    ]
})
export class CompetitionModule { }
