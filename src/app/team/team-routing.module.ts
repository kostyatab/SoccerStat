import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team.component';
import { MatchListComponent } from './match-list/match-list.component';

const routes: Routes = [{
  path: '',
  component: TeamComponent,
  children: [
    {path: '', component: MatchListComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
