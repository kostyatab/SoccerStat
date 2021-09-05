import { Pipe, PipeTransform } from '@angular/core';
import { CompetitionTeamDTO } from '../api/models/competitionTeamDTO';

@Pipe({
  name: 'teamsSearch'
})
export class TeamsSearchPipe implements PipeTransform {

  transform(value: CompetitionTeamDTO[] | undefined, search: string): CompetitionTeamDTO[] | undefined {
    if (!value) { return value; }

    return value.filter(x => x.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

}
