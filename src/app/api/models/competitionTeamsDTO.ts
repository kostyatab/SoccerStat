import { CompetitionsDTO } from './competitionsDTO';
import { SeasonDTO } from './seasonDTO';
import { CompetitionTeamDTO } from './competitionTeamDTO';

export class CompetitionTeamsDTO extends CompetitionsDTO{
  season: SeasonDTO | {} = {};
  teams: CompetitionTeamDTO[] = [];
}
