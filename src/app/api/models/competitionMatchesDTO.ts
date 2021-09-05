import { CompetitionsDTO } from './competitionsDTO';
import { CompetitionMatchDTO } from './competitionMatchDTO';

export class CompetitionMatchesDTO extends CompetitionsDTO{
  matches : CompetitionMatchDTO[] = [];
}
