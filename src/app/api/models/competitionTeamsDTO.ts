import { SeasonDTO } from './seasonDTO';
import { CompetitionTeamDTO } from './competitionTeamDTO';
import { CompetitionsItemDTO } from './competitionsItemDTO';

export class CompetitionTeamsDTO{
  count: number = 0;
  filters: object = {};
  competition: CompetitionsItemDTO | null = null;
  season: SeasonDTO | {} = {};
  teams: CompetitionTeamDTO[] = [];
}
