import { Pipe, PipeTransform } from '@angular/core';
import { CompetitionsItemDTO } from '../api/models/competitionsItemDTO';

@Pipe({
  name: 'competitionSearch'
})
export class CompetitionSearchPipe implements PipeTransform {

  transform(value: CompetitionsItemDTO[] | undefined, search: string): CompetitionsItemDTO[] | undefined {
    if (!value) { return value; }

    return value.filter(x => x.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

}
