import { CompetitionMatchDTO } from './competitionMatchDTO';
import { CompetitionsItemDTO } from './competitionsItemDTO';

export class CompetitionMatchesDTO{
  count: number = 0;
  filters: object = {};
  competition: CompetitionsItemDTO | null = null;
  matches : CompetitionMatchDTO[] = [];
}
