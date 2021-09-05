import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './competition.component';
import { ListComponent } from './list/list.component';
import { TeamListComponent } from './team-list/team-list.component';
import { MatchListComponent } from './match-list/match-list.component';

const routes: Routes = [{
  path: '',
  component: CompetitionComponent,
  children: [
    {path: '', component: ListComponent},
    {path: 'team-list/:id', component: TeamListComponent},
    {path: 'match-list/:id', component: MatchListComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionRoutingModule { }
