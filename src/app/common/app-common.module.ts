import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { CompetitionSearchPipe } from './competition-search.pipe';
import { TeamsSearchPipe } from './teams-search.pipe';

@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent,
    CompetitionSearchPipe,
    TeamsSearchPipe
  ],
  exports: [
    SearchComponent,
    CompetitionSearchPipe,
    TeamsSearchPipe
  ],
  imports: [
    FormsModule
  ]
})
export class AppCommonModule { }
