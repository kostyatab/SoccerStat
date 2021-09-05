import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { CompetitionSearchPipe } from './competition-search.pipe';

@NgModule({
  declarations: [
    SearchComponent,
    FilterComponent,
    CompetitionSearchPipe
  ],
  exports: [
    SearchComponent,
    CompetitionSearchPipe
  ],
  imports: [
    FormsModule
  ]
})
export class AppCommonModule { }
