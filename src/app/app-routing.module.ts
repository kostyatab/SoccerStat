import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./competition/competition.module')
      .then(m => m.CompetitionModule)
  },
  {
    path: 'team/:id',
    loadChildren: () => import('./team/team.module')
      .then(m => m.TeamModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
